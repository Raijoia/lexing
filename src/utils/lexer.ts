import { Token, TokenType } from '../interfaces/token';
import { keywords, operators, separators } from '../utils/keywords';

export class Lexer {
  private input: string;
  private position: number;
  private tokens: Token[];
  private lastTokenWasKeyword: boolean;
  private identfiers: string[];

  constructor(input: string) {
    this.input = input;
    this.position = 0;
    this.tokens = [];
    this.lastTokenWasKeyword = false;
    this.identfiers = [];
  }

  public tokenize(): Token[] {
    while (this.position < this.input.length) {
      const currentChar = this.input[this.position];

      if (this.isWhitespace(currentChar)) {
        this.position++;
        continue;
      }

      if (this.isCommentStart(currentChar)) {
        const nextChar = this.input[this.position + 1];
        if (nextChar === '/') {
          this.tokens.push(this.tokenizeLineComment());
        } else if (nextChar === '*') {
          this.tokens.push(this.tokenizeBlockComment());
        }
        continue;
      }

      if (this.isLetter(currentChar)) {
        this.tokens.push(this.tokenizeIdentifierOrKeyword());
        continue;
      }

      if (this.isDigit(currentChar)) {
        this.tokens.push(this.tokenizeNumber());
        continue;
      }

      if (this.isOperatorStart(currentChar)) {
        this.tokens.push(this.tokenizeOperator());
        continue;
      }

      if (this.isSeparator(currentChar)) {
        this.tokens.push({ type: TokenType.Separator, value: currentChar });
        this.position++;
        continue;
      }

      if (currentChar === '"') {
        this.tokens.push(this.tokenizeString());
        continue;
      }

      this.tokens.push({ type: TokenType.Unknown, value: currentChar });
      this.position++;
    }

    return this.tokens;
  }

  private isWhitespace(char: string): boolean {
    return /\s/.test(char);
  }

  private isLetter(char: string): boolean {
    return /[a-zA-Z_]/.test(char);
  }

  private isDigit(char: string): boolean {
    return /[0-9]/.test(char);
  }

  private isOperatorStart(char: string): boolean {
    for (const op of operators) {
      if (op.startsWith(char)) {
        return true;
      }
    }
    return false;
  }

  private isSeparator(char: string): boolean {
    return separators.has(char);
  }

  private isCommentStart(char: string): boolean {
    const nextChar = this.input[this.position + 1];
    return (
      (char === '/' && nextChar === '/') || (char === '/' && nextChar === '*')
    );
  }

  private tokenizeIdentifierOrKeyword(): Token {
    let start = this.position;
    while (
      this.position < this.input.length &&
      (this.isLetter(this.input[this.position]) ||
        this.isDigit(this.input[this.position]))
    ) {
      this.position++;
    }
    const value = this.input.substring(start, this.position);
    let type = keywords.has(value) ? TokenType.Keyword : TokenType.Identifier;

    if (
      type === TokenType.Identifier &&
      !this.lastTokenWasKeyword &&
      !this.identfiers.includes(value)
    ) {
      type = TokenType.Unknown;
    }

    if (type === TokenType.Identifier && !this.identfiers.includes(value)) {
      this.identfiers.push(value);
    }

    this.lastTokenWasKeyword = type === TokenType.Keyword;

    return { type, value };
  }

  private tokenizeNumber(): Token {
    let start = this.position;
    while (
      this.position < this.input.length &&
      this.isDigit(this.input[this.position])
    ) {
      this.position++;
    }
    const value = this.input.substring(start, this.position);
    return { type: TokenType.Literal, value };
  }

  private tokenizeOperator(): Token {
    let start = this.position;
    let longestMatch = '';
    for (const op of operators) {
      if (this.input.startsWith(op, start) && op.length > longestMatch.length) {
        longestMatch = op;
      }
    }
    this.position += longestMatch.length;
    return { type: TokenType.Operator, value: longestMatch };
  }

  private tokenizeString(): Token {
    let start = this.position;
    this.position++;

    while (
      this.position < this.input.length &&
      this.input[this.position] !== '"'
    ) {
      this.position++;
    }

    this.position++;

    const value = this.input.substring(start, this.position);
    return { type: TokenType.String, value };
  }

  private tokenizeLineComment(): Token {
    let start = this.position;
    this.position += 2;

    while (
      this.position < this.input.length &&
      this.input[this.position] !== '\n'
    ) {
      this.position++;
    }

    const value = this.input.substring(start, this.position);
    return { type: TokenType.Comment, value };
  }

  private tokenizeBlockComment(): Token {
    let start = this.position;
    this.position += 2;

    while (
      this.position < this.input.length &&
      !(
        this.input[this.position] === '*' &&
        this.input[this.position + 1] === '/'
      )
    ) {
      this.position++;
    }

    this.position += 2;

    const value = this.input.substring(start, this.position);
    return { type: TokenType.Comment, value };
  }
}
