import { Component, Input } from '@angular/core';
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

  ngOnInit() {
    if (this.admin) {
      this.onGetReplyList(this.admin.email);
    } else if (this.user) {
      this.onGetReplyList(this.user.email);
    }
  }

  private onGetReplyList(email: string) {
    this.replyService
      .getReplyList(email)
      .subscribe((replyListFromDB: Reply[]) => {
        this.replyList = replyListFromDB;
      });
  }
}
