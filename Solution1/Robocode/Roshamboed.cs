using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using Robocode;

namespace DerekHolmes
{
    public class Roshamboed : Robot
    {
        public object lockMe = new object();
        
        // The main method of your robot containing robot logics
        public override void Run()
        {

            // -- Initialization of the robot --
            SetAllColors(System.Drawing.Color.Yellow);
            BodyColor = System.Drawing.Color.Red;

            const int leftDegrees = 270;
            if (Heading > leftDegrees)
                TurnLeft(Heading - leftDegrees);
            else if (Heading < leftDegrees)
                TurnRight(leftDegrees - Heading);

            // Head for the wall
            TurnGunRight(90);
            var max = Math.Max(BattleFieldWidth, BattleFieldHeight);
            Ahead(max);

            var rand = new Random();
            
            // Infinite loop making sure this robot runs till the end of the battle round
            while (true)
            {
                if (Monitor.TryEnter(lockMe))
                {
                    Ahead(rand.Next(100) + 25);

                    Monitor.Exit(lockMe);
                }

            }
        }

        public override void OnHitRobot(HitRobotEvent evnt)
        {
            base.OnHitRobot(evnt);

            TurnGunLeft(90);
            Scan();
            TurnGunRight(90);
        }

        public override void OnHitWall(HitWallEvent evnt)
        {
            if (Monitor.TryEnter(lockMe))
            {
                base.OnHitWall(evnt);

                if (Heading%90 == 0)
                {
                    Fire(0.5);
                    TurnRight(90);
                    Fire(0.5);
                    return;
                }

                //const int leftDegrees = 270;
                //if (Heading > leftDegrees)
                //    TurnLeft(Heading - leftDegrees);
                //else if (Heading < leftDegrees)
                //    TurnRight(leftDegrees - Heading);

                Monitor.Exit(lockMe);

            }
        }

        public override void OnHitByBullet(HitByBulletEvent evnt)
        {
            base.OnHitByBullet(evnt);

            if (Monitor.TryEnter(lockMe))
            {
                TurnRight(90);
                Fire(1);
                Ahead(100);

                Monitor.Exit(lockMe);
            }
        }


        // Robot event handler, when the robot sees another robot
        public override void OnScannedRobot(ScannedRobotEvent e)
        {
            Fire(Rules.MAX_BULLET_POWER); 
        }
    }
}
