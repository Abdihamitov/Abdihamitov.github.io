/**
 * Плейлист плеера: опенинги, эндинги и саундтрек «Фрирен», плюс любимые треки.
 *
 * Источник звука — официальные загрузки исполнителей на YouTube (iframe API),
 * поэтому просмотры идут авторам. Тексты песен защищены авторским правом и
 * в репозиторий не включены: в бегущей строке показываются название и исполнитель.
 */

export type Track = {
  id: string;
  title: string;
  artist: string;
  /** ID официального клипа на YouTube. */
  youtubeId: string;
  /** Строки для бегущей строки. Пусто — покажем название и исполнителя. */
  lyrics: string[];
};

export const playlist: Track[] = [
  { id: "yuusha", title: "勇者", artist: "YOASOBI", youtubeId: "OIBODIPC_8Y", lyrics: [] },
  { id: "anytime", title: "Anytime Anywhere", artist: "milet", youtubeId: "r105CzDvoo0", lyrics: [] },
  { id: "haru", title: "晴る", artist: "ヨルシカ", youtubeId: "CkvWJNt77mU", lyrics: [] },
  { id: "lulu", title: "lulu.", artist: "Mrs. GREEN APPLE", youtubeId: "MjeiIal1ZR0", lyrics: [] },
  { id: "story", title: "The Story of Us", artist: "milet", youtubeId: "_1NbGbYG4qg", lyrics: [] },
  { id: "zoltraak", title: "Zoltraak", artist: "Evan Call", youtubeId: "7S3eJG-8v_E", lyrics: [] },
  { id: "bluebird", title: "ブルーバード", artist: "いきものがかり", youtubeId: "KpsJWFuVTdI", lyrics: [] },
  { id: "staywithme", title: "Stay With Me", artist: "松原みき", youtubeId: "nuU2YHtxMik", lyrics: [] },
];

/** Прямая ссылка на клип. */
export function watchUrl(track: Pick<Track, "youtubeId">): string {
  return `https://www.youtube.com/watch?v=${track.youtubeId}`;
}
