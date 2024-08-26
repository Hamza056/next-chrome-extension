export type Message = {
  action: "getId";
};

export type Response = {
  id: string;
};

export interface MyExtension {
  sendMessage(message: any, callback?: (response: any) => void): void;
}

export interface Window {
  myextension: MyExtension;
}
