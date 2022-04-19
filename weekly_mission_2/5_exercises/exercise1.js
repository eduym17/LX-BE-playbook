const repo = {
  name: "BE-LaunchX",
  author: "eduym17",
  language: "JavaScript",
  numberOfCommits: 50,
  stars: 10,
  forks: 20,
  issues_open: 5,
  issues_close: 7,
  getTotalIssues: function(){
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function(){
    return `${this.name} repository was created by ${this.author}`
  }
 }
 
 console.log("Repository name:" + repo.name)
 console.log("Total issues: " + repo.getTotalIssues())
 console.log(repo.getGeneralInfo())

 const issue = {
   title: "Fixing",
   repositoryNameAssociated: "BE-LaunchX",
   status: "In progress",
   numberofComments: "6",
   labels: "10",
   author: "eduym17",
   dateCreated: "yesterday",
   lastUpdated: "today",
   getTitleAndAuthor: function() {
     return `${this.title} issue was created by ${this.author}`
   },
   getGeneralInfo: function() {
    return `${this.repositoryNameAssociated} repository was created by ${this.author}`
   }
 }
 console.log("Repository name: " + issue.repositoryNameAssociated)
 console.log("Total issues: " + issue.getTitleAndAuthor())
 console.log(issue.getGeneralInfo())

 const pullRequest = {
   title: "Fixed",
   author: "eduym17",
   branchName: "dev",
   dateCreated: "today",
   status: "pending",
   repositoryNameAssociated: "BE-LaunchX",
   getStatus: function(){
    return `The status of ${this.title} pull request is ${this.status}`
   },
   getTitleAndAuthor: function() {
    return `${this.title} pull request was created by ${this.author}`
  },
 }
 console.log("Repository name: " + pullRequest.repositoryNameAssociated)
 console.log(pullRequest.getTitleAndAuthor())
 console.log(pullRequest.getStatus())

 const gitHub = {
   repo: "BE-LaunchX",
   issue: "Fix all",
   pullRequest: "All fixed",
 }
 console.log(gitHub)

 const twitter = {
   user: {
    user: "Eduardo Yañez",
    username: "eduym17",
    bio: "string",
    age: 28,
   },
   trendingTopic: {
    tt1: "Ucrania",
    tt2: "Desechan reforma eléctrica",
   },
   hashtag: {
    ht1: "#Temblor",
    ht2: "#BetterCallSaul",
   }
 }
 console.log(twitter)

 const facebook = {
  user: {
    user: "Eduardo Yañez",
    username: "eduym17",
    bio: "string",
    age: 28,
   },
  post: {
    p1: "memes",
    p2: "news",
    p3: "new friends",
    p4: "more memes",
    p5: "dog memes",
  },
  biography: {
    bio: "empty",
  }
 }
 console.log(facebook)