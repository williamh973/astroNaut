import { Component, Input } from '@angular/core';
import { Comments } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-feat-comment-list',
  templateUrl: './feat-comment-list.component.html',
  styleUrls: ['./feat-comment-list.component.scss']
})
export class FeatCommentListComponent {

  @Input() newsCardId!: number;
  commentList: Comments[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    // console.log(this.newsCardId);
    this.onGetNewsCardComments();
  }

  onGetNewsCardComments() {
    this.commentService.getCommentList().subscribe(
      (commentFromDatabase) => {
        this.commentList = commentFromDatabase;
      }
    )
  };

}
