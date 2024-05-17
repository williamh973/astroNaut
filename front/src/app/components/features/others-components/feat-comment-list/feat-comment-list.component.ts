import { Component, Input } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { Comments } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-feat-comment-list',
  templateUrl: './feat-comment-list.component.html',
  styleUrls: ['./feat-comment-list.component.scss']
})
export class FeatCommentListComponent {

  @Input() newsCardId!: number;
  @Input() newsCard!: NewsCard;
  commentList: Comments[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.onGetNewsCardComments();
  }

  onGetNewsCardComments() {
    this.commentService.getCommentList().subscribe(
      (commentFromDatabase) => {
        this.filterCommentsByNewsCardId(commentFromDatabase);
      }
    )
  };

  private filterCommentsByNewsCardId(commentFromDatabase: Comments[]) {
    this.commentList = commentFromDatabase.filter((comments) => comments.newsCard.id === this.newsCardId);
  }
}
