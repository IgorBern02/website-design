import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart as solidHeart,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// adiciona todos os ícones que o app usa na biblioteca
library.add(solidHeart, regularHeart, faExclamation, faStar);
