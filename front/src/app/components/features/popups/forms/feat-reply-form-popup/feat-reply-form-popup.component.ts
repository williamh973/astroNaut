import { Component, EventEmitter, Input, Output } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Reply } from 'src/app/models/admin/reply.model';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ReplyService } from 'src/app/shared/services/admin/reply/reply.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-feat-reply-form-popup',
  templateUrl: './feat-reply-form-popup.component.html',
  styleUrls: ['./feat-reply-form-popup.component.scss'],
})
export class FeatReplyFormPopupComponent {
  @Input() contact!: Contact;
  @Input() isAdminMod!: boolean;
  @Input() receivedReply!: Reply;
  @Output() isReplyFormOpen = new EventEmitter<boolean>();
  role: string = '';

  newReply: Reply = new Reply(
    '',
    '',
    new Date(),
    new User(
      '',
      '',
      '',
      '',
      (this.role = 'ROLE_ADMIN' || 'ROLE_USER'),
      false,
      [],
      [],
      []
    ),
    new User(
      '',
      '',
      '',
      '',
      (this.role = 'ROLE_ADMIN' || 'ROLE_USER'),
      false,
      [],
      [],
      []
    )
  );

  isLoadingComposantActive: boolean = false;
  isSubmitButtonEnabled: boolean = false;
  isReplyCreatedError: boolean = false;
  isReplyCreatedSuccess: boolean = false;
  userSenderId: number = 0;

  constructor(
    private replyService: ReplyService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.onGetUserCurrentData();
  }

  private onGetUserCurrentData() {
    this.userService.getCurrentUserData().subscribe(
      (user: User) => {
        if (user.id) {
          this.userSenderId = user.id;
        }
      },
      (error: any) => {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error
        );
      }
    );
  }

  onCheckInputCompleted() {
    this.isSubmitButtonEnabled =
      this.newReply.content.length > 1 && this.newReply.content.length < 1000;
  }

  onSubmit() {
    if (this.isSubmitButtonEnabled) {
      this.isLoadingComposantActive = true;

      if (this.isAdminMod && this.contact !== undefined) {
        this.sendReply(this.newReply, this.contact.user.id!);
      } else if (this.isAdminMod && this.contact === undefined) {
        this.sendReply(this.newReply, this.receivedReply.user.id!);
      } else if (!this.isAdminMod) {
        this.sendReply(this.newReply, this.receivedReply.user.id!);
      }
    }
  }

  private sendReply(newReply: Reply, receivedUserId: number) {
    this.replyService
      .createReply(newReply, receivedUserId)
      .pipe(
        catchError(() => {
          this.isLoadingComposantActive = false;
          this.isReplyCreatedError = true;
          setTimeout(() => {
            this.isReplyCreatedError = false;
          }, 3000);
          return of(null);
        })
      )
      .subscribe((newReply) => {
        this.isLoadingComposantActive = false;
        this.isReplyCreatedSuccess = true;
        setTimeout(() => {
          this.isReplyCreatedSuccess = false;
        }, 3000);
        this.resetFormFields();
      });
  }

  private resetFormFields() {
    this.newReply.content = '';
  }

  onCloseReplyForm() {
    this.isReplyFormOpen.emit(false);
  }
}
