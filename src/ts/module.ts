export default function logger(): Promise<any> {
  return new Promise((resolve: Function) => {
    console.log('hello, from the module');
    resolve();
  });
}