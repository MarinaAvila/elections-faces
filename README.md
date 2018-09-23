# Seed installation

## Setup

- `npm install`


## Development

- `npm run watch` to run in localhost  
or  
- `npm run watch-nw` to run with node webkit in dev  
or  
- `npm start` to run with node webkit in prod


## First deploy

- install dropbox on destination machine, stop update notifications
- download the `normal` of node webkit http://nwjs.io and save it on dropbox
- copy `./package.json` to the program
- `npm run build`
- copy `./build` to dropbox
- copy `./assets` to dropbox
- auto start .exe on the destination machine (https://tunecomp.net/add-program-to-startup-windows-10/)
- stop Windows update notifications (https://www.forbes.com/sites/gordonkelly/2015/08/26/windows-10-how-to-stop-forced-updates/#b4cafe746f6a)
- enable cleartype (https://www.isunshare.com/windows-10/turn-off-or-on-clear-type-text-in-windows-10.html)
- run the .bat file in `./deploy`
(we have to taskkill explorer.exe so that we can disable all touchscreen gestures)


## Future deploys

- `npm run build`
- copy `./build` to dropbox
- copy `./assets` to dropbox


## Application Commands

- `q`: quit
- `f`: fullscreen
- `r`: reload


## Video Converter

- `brew install libvpx`
- `brew install ffmpeg --with-libvpx`
- on terminal, run `ffmpeg` script replacing `VIDEO_NAME` for each video
```sh
ffmpeg -i "VIDEO_NAME.mp4" -c:v libvpx-vp9 -crf 31 -b:v 0 -threads 8 -speed 1 \
  -tile-columns 6 -frame-parallel 1 -auto-alt-ref 1 -lag-in-frames 25 \
  -c:a libopus -b:a 64k -f webm "VIDEO_NAME.webm"
```


Refs:
- https://trac.ffmpeg.org/wiki/Encode/VP9
- http://wiki.webmproject.org/ffmpeg/vp9-encoding-guide
- https://gist.github.com/clayton/6196167
