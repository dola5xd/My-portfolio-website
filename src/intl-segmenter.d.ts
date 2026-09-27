// intl-segmenter.d.ts

interface IntlSegmenterOptions {
  granularity?: "grapheme" | "word" | "sentence";
}

declare namespace Intl {
  class Segmenter {
    constructor(locale: string, options?: IntlSegmenterOptions);
    segment(input: string): Iterable<Segment>;
  }

  interface Segment {
    segment: string;
    index: number;
    isWordLike: boolean;
  }
}
