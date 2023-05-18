export interface IResponse<TEntity> {
  status: string;
  code: number;
  messages: string[];
  result: TEntity;
}
