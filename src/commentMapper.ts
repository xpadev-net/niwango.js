import { IComment } from "@/@types/types";
import { config } from "@/definition/config";
import { color2number } from "@/utils/number2color";

const size2number = {
  small: 2,
  medium: 0,
  big: 1,
};

class CommentMapper {
  public comment: IComment;
  private _color: number;
  constructor(comment: IComment) {
    this.comment = comment;
    this._color = this._parseColor();
  }

  get message() {
    return this.comment.content;
  }
  set message(val: string) {
    this.comment.content = val;
  }

  get vpos() {
    return this.comment.vpos / 100;
  }
  set vpos(val: number) {
    this.comment.vpos = Math.floor(val * 100);
  }

  get _vpos() {
    return this.comment.vpos;
  }

  get isYourPost() {
    return false;
  }

  get mail() {
    return this.comment.mail.join(" ");
  }
  set mail(val: string) {
    this.comment.mail = val.split(/\s+/g);
    this._color = this._parseColor();
  }

  get fromButton() {
    return this.comment.mail.includes("from_button");
  }

  get isPremium() {
    return this.comment.comment.premium;
  }

  get color() {
    return this._color;
  }
  set color(val: number) {
    this._color = val;
  }

  get size() {
    return size2number[this.comment.comment.size];
  }

  get no() {
    return this.comment.comment.id;
  }

  private _parseColor() {
    for (const command of this.comment.mail) {
      const color = config.colors[command];
      if (color) {
        return color2number(color);
      }
      const colorCode = command.match(/^#(?:[0-9a-z]{3}|[0-9a-z]{6})$/);
      if (colorCode && this.comment.comment.premium) {
        return color2number(colorCode[0]);
      }
    }
    return 0;
  }
}

export { CommentMapper };
