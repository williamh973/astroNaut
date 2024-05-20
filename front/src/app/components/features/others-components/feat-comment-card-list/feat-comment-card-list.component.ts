import { Component, Input } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { CommentCard } from 'src/app/models/cards/comment-card.model';
import { CommentCardService } from 'src/app/shared/services/cards/comment-card/comment-card.service';

@Component({
  selector: 'app-feat-comment-card-list',
  templateUrl: './feat-comment-card-list.component.html',
  styleUrls: ['./feat-comment-card-list.component.scss']
})
export class FeatCommentCardListComponent {

  @Input() newsCardId!: number;
  @Input() newsCard!: NewsCard;

  commentListSubject$: CommentCard[] = [];

  filteredCommentList: CommentCard[] = [];

  constructor(private commentCardService: CommentCardService) {}

  ngOnInit() {
    this.onGetNewsCardComments();
  }

  onGetNewsCardComments() {
    this.commentCardService.getCommentList().subscribe(
      (commentFromDatabase) => {
        this.filterCommentsByNewsCardId(commentFromDatabase);
      }
    )
  };

  private filterCommentsByNewsCardId(commentFromDatabase: CommentCard[]) {
    this.filteredCommentList = commentFromDatabase.filter((comments) => comments.newsCard.id === this.newsCardId);
    // this.commentService.postCommentsList(this.filteredCommentList);
    // this.commentService.getCommentsList$().subscribe(
    //   (comments) => {
    //     this.commentListSubject$ = comments;  
         
    //   }
    // );
  }
}
