import { Component, Input } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Reply } from 'src/app/models/admin/reply.model';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ReplyService } from 'src/app/shared/services/admin/reply/reply.service';

@Component({
  selector: 'app-feat-reply-form-popup',
  templateUrl: './feat-reply-form-popup.component.html',
  styleUrls: ['./feat-reply-form-popup.component.scss'],
})
export class FeatReplyFormPopupComponent {
  @Input() contact!: Contact;
  @Input() isAdminMod!: boolean;
  @Input() admin!: User;
  @Input() user!: User;

  reply: Reply = new Reply(
    '',
    new Date(),
    new User('', '', '', '', 'ROLE_ADMIN', false, [], [], []),
    new User('', '', '', '', 'ROLE_USER', false, [], [], [])
  );

  isLoadingComposantActive: boolean = false;
  isSubmitButtonEnabled: boolean = false;
  isReplyCreatedError: boolean = false;
  isReplyCreatedSuccess: boolean = false;

  constructor(private replyService: ReplyService) {}

  ngOnInit() {
    // console.log('NORMAL USER', this.user);
    // console.log('ADMIN USER', this.admin);
    // console.log(this.contact);
  }

  onCheckInputCompleted() {
    this.isSubmitButtonEnabled =
      this.reply.content.length > 1 && this.reply.content.length < 1000;
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    if (this.isAdminMod) {
      this.onAdminSendReply();
    } else {
      this.onUserSendReply();
    }
  }

  private onAdminSendReply() {
    if (this.contact === undefined) {
      this.replyService
        .createReply(this.reply, this.admin.id!)
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
        .subscribe((newResponse) => {
          this.isLoadingComposantActive = false;
          this.isReplyCreatedSuccess = true;
          setTimeout(() => {
            this.isReplyCreatedSuccess = false;
          }, 3000);
          this.resetFormFields();
        });
    } else {
      this.replyService
        .createReply(this.reply, this.contact.user.id!)
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
        .subscribe((newResponse) => {
          this.isLoadingComposantActive = false;
          this.isReplyCreatedSuccess = true;
          setTimeout(() => {
            this.isReplyCreatedSuccess = false;
          }, 3000);
          this.resetFormFields();
        });
    }
  }

  private onUserSendReply() {
    let adminReceiverId = this.admin.id;
    this.replyService
      .createReply(this.reply, adminReceiverId!)
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
      .subscribe((newResponse) => {
        this.isLoadingComposantActive = false;
        this.isReplyCreatedSuccess = true;
        setTimeout(() => {
          this.isReplyCreatedSuccess = false;
        }, 3000);
        this.resetFormFields();
      });
  }

  private resetFormFields() {
    this.reply.content = '';
  }
}
