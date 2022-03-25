import { dataFilms, FilmType } from "./data";

//1. Собрать в массив все жанры фильмов (без повторения)

const uniteGenresOfFilms = (films: FilmType[]): string[] => {
  const genresOfFilms = films.flatMap((item) => item.genre);

  return [...new Set(genresOfFilms)];
};
console.log(uniteGenresOfFilms(dataFilms));

//1.1 Вариант 1ой задачи (для себя)

const uniteGenresOfFilms_1 = (films: FilmType[]): string[] => {
  const genresOfFilms = films
    .map((item) => item.genre)
    .reduce((acc, item) => [...acc, ...item], []);
  // Мы берем пустой массив [], закидываем его данные в новый массив acc, а также закидываем в этот новый массив все жанры из 1го фильма из item. На следующей итерации у нас есть массив со всеми жанрами из 1го фильма, мы их закидываем в новый массив acc и докидываем в этот новый массив все жанры из 2го фильма. => мы раскрыли массив массивов

  return genresOfFilms;
};
//console.log(uniteGenresOfFilms_1(dataFilms));

//1.2 Вариант 1ой задачи (для себя)
const uniteGenresOfFilms_2 = (films: FilmType[]): string[] => {
  const genresOfFilms = films.map((item) => item.genre).flat();

  return genresOfFilms;
};
//console.log(uniteGenresOfFilms_2(dataFilms));

//2. Собрать в массив всех актеров всех фильмов (без повторения)

const uniteActors = (films: FilmType[]): string[] => {
  const actors = films.flatMap((item) => item.actors);

  return [...new Set(actors)];
};
console.log(uniteActors(dataFilms));

//3. Отсортировать фильмы по рейтингу по убыванию

const ratingOfFilms = (films: FilmType[]): number[] => {
  return films
    .map((film) => film.imdbRating)
    .sort()
    .reverse();
};
console.log(ratingOfFilms(dataFilms));

//4 Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot

type SomeFilms = {
  id: number;
  title: string;
  released: string;
  plot: string;
};

const selectFilms = (films: FilmType[]): SomeFilms[] => {
  return films.map((item) => ({
    id: item.id,
    title: item.title,
    released: item.released,
    plot: item.plot,
  }));
};
console.log(selectFilms(dataFilms));

//5 Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив, с фильмами где число равно году выхода фильма.

const yearOfFilm = (films: FilmType[], value: number): FilmType[] => {
  return films.filter((item) => value === item.year);
};
console.log(yearOfFilm(dataFilms, 2011));

//6 Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный массив, с фильмами, где строка входит в название фильма.

const nameOfFilm = (films: FilmType[], value: string): FilmType[] => {
  return films.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
};
console.log(nameOfFilm(dataFilms, "HaRry poTTER"));

//7 Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив, с фильмами где строка входит в название фильма или в его сюжет.

const nameOfFilmOrPlot = (films: FilmType[], value: string): FilmType[] => {
  return films.filter(
    (item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.plot.toLowerCase().includes(value.toLowerCase())
  );
};
console.log(nameOfFilmOrPlot(dataFilms, "Harry, Ron"));

//8 Создать функцию, которая бы принимала 3 параметра: 1)массив фильмов , 2) строка(название поля, например 'title') и строку/число(значение поля "Black Widow"). А результатом этой функции должен быть отфильтрованный массив, где параметры 2 и 3 равны в объекте фильма. Например: передаем (films, 'title', 'Black Widow') и на выходе получаем фильм с id=1 если передаем (films, 'year', 2011) , то получаем фильм с id=2

const searchFilms = (
  films: FilmType[],
  searchField: keyof FilmType,
  searchFilm: string | number
): FilmType[] => {
  const result = films.filter((item) => item[searchField] === searchFilm);

  return result;
};

//console.log(searchFilms(dataFilms, "title", "Black Widow"));
//console.log(searchFilms(dataFilms, "year", 2011));
console.log(searchFilms(dataFilms, "imdbRating", 6.9));
