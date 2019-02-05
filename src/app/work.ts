export class Work {
    public showAuthor: boolean;
    public showFan: boolean;
    constructor(public id: number,public name: string,
      public author: string, public more: string,
      public upvotes: number,public downvotes: number,
      public completeDate: Date
    ) {
     
    }
  }