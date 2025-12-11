/**
 * Represents an image or video with annotation text.
 * - Before processing: src is a filename
 * - After processing: src is the enhanced image path or video URL
 */
export interface AnnotatedPicture {
  /** Image/video source - filename before import, enhanced path after */
  src: string;
  /** Annotation or description for the media */
  text: string;
  /** Optional: Indicates if this is a video (default: false/image) */
  isVideo?: boolean;
}

export interface DateRange {
  start: Date;
  end?: Date | 'Ongoing';
}
