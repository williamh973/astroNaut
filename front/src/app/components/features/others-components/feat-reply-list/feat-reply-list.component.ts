import { Component, Input } from '@angular/core';
import { Reply } from 'src/app/models/admin/reply.model';
import { ReplyService } from 'src/app/shared/services/admin/reply/reply.service';

@Component({
  selector: 'app-feat-reply-list',
  templateUrl: './feat-reply-list.component.html',
  styleUrls: ['./feat-reply-list.component.scss'],
})
export class FeatReplyListComponent {
  @Input() userMail!: string;
  replyList: Reply[] = [];

  constructor(private replyService: ReplyService) {}

  ngOnInit() {
    this.replyService
      .getReplyList(this.userMail)
      .subscribe((replyListFromDB: Reply[]) => {
        this.replyList = replyListFromDB;
        console.log(this.replyList);
      });
  }
}
