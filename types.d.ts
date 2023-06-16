export interface Song {
  id: string;
  name: string;
  explicit?: boolean;
  href?: string;
  uri?: string;
  duration?: number;
  artist: [
    {
      id: string;
      name: string;
      href: string;
    }
  ];
  album: {
    name: string;
    total_tracks?: number;
    release_date?: string;
    images?: [
      {
        url: string;
        //height: number;
        //width: number;
      }
    ];
  };
  images?: [
    {
      url: string;
      //height?: number;
      //width?: number;
    }
  ];
}
