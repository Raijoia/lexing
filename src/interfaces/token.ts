export enum TokenType {
  Keyword,
  Identifier,
  Operator,
  Literal,
  Separator,
  Comment,
  Whitespace,
  Unknown,
  String
}

export interface Token {
  type: TokenType;
  value: string;
}
