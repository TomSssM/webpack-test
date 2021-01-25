export class Logger {
  log() {
    document.body.append(this.createElement());
  }

  createElement() {
    const div = document.createElement('div');

    div.textContent = this.message;

    return div;
  }

  get message() {
    return 'Click';
  }
}
