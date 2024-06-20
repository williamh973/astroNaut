import { Component, Input, SimpleChanges } from '@angular/core';
import { Reply } from 'src/app/models/admin/reply.model';
import { User } from 'src/app/models/user.model';
import { ReplyService } from 'src/app/shared/services/admin/reply/reply.service';

@Component({
  selector: 'app-feat-reply-list',
  templateUrl: './feat-reply-list.component.html',
  styleUrls: ['./feat-reply-list.component.scss'],
})
export class FeatReplyListComponent {
  @Input() admin!: User;
  @Input() user!: User;
  @Input() isAdminMod!: boolean;
  replyList: Reply[] = [];

  constructor(private replyService: ReplyService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['admin'] && this.admin) {
      this.onGetReplyList(this.admin.email);
    } else if (changes['user'] && this.user) {
      this.onGetReplyList(this.user.email);
    }
  }

  private onGetReplyList(email: string) {
    this.replyService
      .getReplyList(email)
      .subscribe((replyListFromDB: Reply[]) => {
        this.replyList = replyListFromDB.sort(
          (replyA, replyB) =>
            new Date(replyB.timestamp).getTime() -
            new Date(replyA.timestamp).getTime()
        );
      });
  }
}
