# README

## Artillery Computer
- This is an app for simulating the trajectory of rounds fired from arbitrary artillery cannons.
- You, as the user, can set the angle of the cannon's barrel relative to the ground and the muzzle velocity of the round that you'll fire.
- The weight of the shell, the distance to the target, and the size of the target will be pseudo-randomly generated for each shot you attempt. You will be able to see what these values are.
- The results of your shot, your overall accuracy, and some other general information about you and the other users of the app will be displayed as well. 

## Usage
- First and foremost, this application can be used by visiting https://artillery-computer.herokuapp.com/

- Local Installation:
    - ensure that you have ruby 2.5.0 installed
    - ensure that you have rails 5.2.3 installed
    - ensure that you have postgresql 11.2 installed
    - ensure that you have foreman installed
    - run `bundle install`
    - run `yarn install`
    - to start the app: run `foreman start -f Procfile.dev -p 3000`
    - visit `localhost:3000`

- Testing:
    - run `rspec`
    - run `yarn test`