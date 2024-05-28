import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Token, TokenType } from '../../../../interfaces/token';
import { Lexer } from '../../../../utils/lexer';

@Component({
  selector: 'app-lexing',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './lexing.component.html',
  styleUrls: ['./lexing.component.scss'],
})
export class LexingComponent {
  fileContent: string | null = null;
  tokens: Token[] = [];
  errorMessage: string | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.fileContent = reader.result as string;
        this.tokenizeFileContent();
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsText(file);
    }
  }

  tokenizeFileContent(): void {
    if (this.fileContent) {
      const lexer = new Lexer(this.fileContent);
      const tokens = lexer.tokenize();
      const unknownToken = tokens.find(
        (token) => token.type === TokenType.Unknown
      );

      if (unknownToken) {
        this.errorMessage = `Token desconhecido encontrado: ${unknownToken.value}`;
        this.tokens = [];
      } else {
        this.errorMessage = null;
        this.tokens = tokens;
      }
    }
  }

  getTokenTypeName(type: TokenType): string {
    return TokenType[type];
  }
}
