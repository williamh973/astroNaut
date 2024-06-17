import { Component, Input } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Reply } from 'src/app/models/admin/reply.model';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ReplyService } from 'src/app/shared/services/admin/reply/reply.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-feat-admin-contact-reply-form-popup',
  templateUrl: './feat-admin-contact-reply-form-popup.component.html',
  styleUrls: ['./feat-admin-contact-reply-form-popup.component.scss'],
})
export class FeatAdminContactReplyFormPopupComponent {
  @Input() contact!: Contact;

  reply: Reply = new Reply(
    '',
    new Date(),
    new User('', '', 'ROLE_ADMIN', false, [], [], []),
    new User('', '', 'ROLE_USER', false, [], [], [])
  );

  isLoadingComposantActive: boolean = false;
  isSubmitButtonEnabled: boolean = false;
  isReplyCreatedError: boolean = false;
  isReplyCreatedSuccess: boolean = false;

  constructor(
    private replyService: ReplyService,
    private userService: UserService
  ) {}

  onCheckInputCompleted() {
    this.isSubmitButtonEnabled =
      this.reply.content.length > 1 && this.reply.content.length < 1000;
  }

  onSendReply() {
    this.isLoadingComposantActive = true;
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

  private resetFormFields() {
    this.reply.content = '';
  }
}
