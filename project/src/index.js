import { Logger } from 'package/Logger';

function component() {
  const element = document.createElement('div');
  const logger = new Logger();

  element.textContent = 'Hello Webpack!';

  element.addEventListener('click', () => {
    logger.log();
  });

  return element;
}

document.body.append(component());
