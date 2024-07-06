// interfaces/Thing.ts

export type ThingType = 'note' | 'password' | 'date' | 'encryptedText' | 'website' | 'codeSnippet';

export interface BaseThing {
  id: string;
  type: ThingType;
  title: string;
  img: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Note extends BaseThing {
  type: 'note';
  content: string;
}

export interface Password extends BaseThing {
  type: 'password';
  hashedPassword: string;
  // other password-related fields
}

export interface DateThing extends BaseThing {
  type: 'date';
  date: Date;
}

export interface EncryptedText extends BaseThing {
  type: 'encryptedText';
  encryptedContent: string;
}

export interface Website extends BaseThing {
  type: 'website';
  url: string;
  description?: string;
}

export interface CodeSnippet extends BaseThing {
  type: 'codeSnippet';
  code: string;
  language: string;
}

// Polymorphic Thing type
export type Thing = Note | Password | DateThing | EncryptedText | Website | CodeSnippet;
