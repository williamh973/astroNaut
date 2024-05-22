import { Component, Input } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { CommentCard } from 'src/app/models/cards/comment-card.model';
import { CommentCardService } from 'src/app/shared/services/cards/comment-card/comment-card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feat-comment-card-list',
  templateUrl: './feat-comment-card-list.component.html',
  styleUrls: ['./feat-comment-card-list.component.scss']
})
export class FeatCommentCardListComponent {

  @Input() newsCardId!: number;
  @Input() newsCard!: NewsCard;

  filteredCommentList: CommentCard[] = [];

  private commentsSubscription!: Subscription;


  constructor(private commentCardService: CommentCardService) {}

  ngOnInit() {
    this.onGetNewsCardComments();    
  }

  ngOnDestroy() {
    if (this.commentsSubscription) {
      this.commentsSubscription.unsubscribe();
    }
  }

  onGetNewsCardComments() {
    this.commentsSubscription = this.commentCardService.getCommentsListSubject$().subscribe(
      (commentFromDatabase) => {
        this.filterCommentsByNewsCardId(commentFromDatabase);
      }
    );

    this.commentCardService.getCommentListFromDB().subscribe(
      (commentFromDatabase) => {
        this.filterCommentsByNewsCardId(commentFromDatabase);
      }
    ); 
  };

  private filterCommentsByNewsCardId(commentFromDatabase: CommentCard[]) {
    this.filteredCommentList = commentFromDatabase
    .filter((commentCard) => commentCard.newsCard.id === this.newsCardId)
    .sort((commentCardA, commentCardB) => {
      const timestampA = new Date(commentCardA.timestamp ?? new Date(0));
      const timestampB = new Date(commentCardB.timestamp ?? new Date(0)); 

      return timestampB.getTime() - timestampA.getTime();
    });
  }

  
}
