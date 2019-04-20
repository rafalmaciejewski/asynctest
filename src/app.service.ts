import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  somethingSync(): string {
    return this.anotherExampleMethod(this.exampleMethod());
  }

  async somethingAsync(): Promise<string> {
    return this.anotherExampleMethod(this.exampleMethod());
  }

  async somethingElseAsync(): Promise<string> {
    const example = this.exampleMethod();
    return new Promise((res) => {
      res(this.anotherExampleMethod(example));
    });
  }

  private exampleMethod(): string[] {
    return 'TESTTESTTESTTESTTESTTEST'.split('');
  }

  private anotherExampleMethod(param: string[]): string {
    return param.join('');
  }
}
