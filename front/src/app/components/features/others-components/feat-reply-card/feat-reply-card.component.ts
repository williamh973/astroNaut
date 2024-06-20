import { Component, Input } from '@angular/core';
import { Reply } from 'src/app/models/admin/reply.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-feat-reply-card',
  templateUrl: './feat-reply-card.component.html',
  styleUrls: ['./feat-reply-card.component.scss'],
})
export class FeatReplyCardComponent {
  @Input() reply!: Reply;
  @Input() isAdminMod!: boolean;
  isLoadingComposantActive: boolean = false;
  isReplyFormOpen: boolean = false;
  isReplyCardDeleteSuccess: boolean = false;
  isReplyCardDeleteError: boolean = false;

  // ngOnInit() {
  //   console.log(this.reply);
  // }

  onOpenreplyForm() {
    this.isReplyFormOpen = true;
  }

  onDeleteReplyCard() {}
}
