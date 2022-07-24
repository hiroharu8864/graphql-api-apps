export type GitHubRepos = {
  repositoryOwner: RepositoryOwner;
};
type RepositoryOwner = {
  repositories: RepositoryConnection;
};
type RepositoryConnection = {
  edges: Array<NumObject>;
};
type NumObject = {
  node: Node;
};
type Node = {
  createdAt: string;
  name: string;
};
