import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Token, TokenType } from '../../../../interfaces/token';
import { Lexer } from '../../../../utils/lexer';

@Component({
  selector: 'app-lexing',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './lexing.component.html',
  styleUrl: './lexing.component.scss',
})
export class LexingComponent {
  fileContent: string | null = null;
  tokens: Token[] = [];

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
      this.tokens = lexer.tokenize();
    }
  }

  getTokenTypeName(type: TokenType): string {
    return TokenType[type];
  }
}
