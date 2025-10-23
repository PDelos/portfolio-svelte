/**
 * Represents an image with annotation text.
 * - Before processing: src is a filename
 * - After processing: src is the enhanced image path
 */
export interface AnnotatedPicture {
  /** Image source - filename before import, enhanced path after */
  src: string;
  /** Annotation or description for the image */
  text: string;
}

export interface DateRange {
  start: Date;
  end?: Date | 'Ongoing';
}
