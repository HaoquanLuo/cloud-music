export const fakeMusic = () => {
  return new Promise<CM.SongInfo>((resolve) => {
    setTimeout(() => {
      resolve({
        songTitle: "Open Arms",
        songId: "2004563446",
        songCoverId: "109951168121859537",
        songSinger: "SZA/Travis Scott",
        songDuration: 239000,
      });
    }, 1000);
  });
};
