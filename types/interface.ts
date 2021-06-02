export interface Repository<T> {
  repository: T;
}

export interface Label {
  name: string;
  color: string;
}

export interface Labels {
  nodes: Label[];
}

export interface IssueContentBaseFields {
  number: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  labels: Labels;
}

export interface Issues {
  nodes: IssueContentBaseFields[];
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
  totalCount: number;
}

export interface IssueContent extends IssueContentBaseFields {
  url: string;
  bodyHTML: string;
}

export type RepositoryIssues = Repository<{ issues: Issues }>;
export type RepositoryIssue = Repository<{ issue: IssueContent }>;
