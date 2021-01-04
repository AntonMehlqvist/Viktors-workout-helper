const data = [
	{
		title: 'Helkroppspass med motståndsband',
		slug: 'helkroppspass-med-motstandsband',
		description: 'Helt perfekt pass att göra om du inte får gå till gymmet men ändå vill ha så ont i kroppen att du gråter lite.',
		image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/2017/08/lets-bands-resistance-bands.jpg?itok=skCYawy5&timestamp=1503481629',
		exercises: [
			{
				title: 'One-arm biceps curl',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-one-arm-biceps-curls.jpg?itok=UDvnqQAo',
				sets: '1',
				repDescription: '12-15 on each side',
				minReps: 12,
				maxReps: 15,
				splitRep: true,
				description: 'Stand with feet shoulder-width apart with both feet on the resistance band. Grasp the band with one hand and hold it with your arm down at your side, palm facing forwards. Bend at the elbow and lift your arm toward your shoulders until you get a good biceps contraction. Then lower slowly back to the start. Do all your reps on one arm, then switch.'
			},
			{
				title: 'Flye',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-flye.jpg?itok=OBXcibAy',
				sets: '1',
				repDescription: '12-15',
				minReps: 12,
				maxReps: 15,
				description: 'Hold the resistance band in both hands, arms stretched straight out to the sides at chest height, with the band going behind your back. Press the band straight out in front of you, bringing your hands together with your arms fully extended, keeping your elbows up throughout and squeezing your chest muscles as you press. Slowly return to the starting position.'
			},
			{
				title: 'Front squat',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-front-squat.jpg?itok=iQJZrj6n',
				sets: '1',
				repDescription: '8-15',
				minReps: 8,
				maxReps: 15,
				description: 'Stand on the resistance band with your feet slightly wider than shoulder-width apart, and bring the top of the band up to rest on the front of your shoulders. Lower into a squat, with your chest up and your knees over your toes. Then push up to the starting position.'
			},
			{
				title: 'Side-lying hip abduction',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-hip-abduction-.jpg?itok=qGbpHxy3',
				sets: '1',
				repDescription: '10-12 each side',
				minReps: 10,
				maxReps: 12,
				splitRep: true,
				description: 'Lie on your side with your hips and knees bent at 90° and the resistance band looped just above your knees. Raise the upper leg to pull your knees apart while contracting your glutes for two to three seconds, then slowly return to the starting position. Do all your reps on one side, then switch.'
			},
			{
				title: 'Glute bridge',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-glute-bridge.jpg?itok=Wl2P9bKw',
				sets: '1',
				repDescription: '10-15',
				minReps: 10,
				maxReps: 15,
				description: 'Loop the resistance band just above your knees and lie on your back with your feet on the floor and your knees bent at 90°. Lift your toes off the floor, then raise your hips until you form a straight line from your knees to your shoulders, contracting your glutes throughout the entire movement. As you raise your hips open your knees slightly to press against the resistance band.'
			},
			{
				title: 'Splitter',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-splitter.jpg?itok=NzJ-iIz1',
				sets: '1',
				repDescription: '8-10',
				minReps: 8,
				maxReps: 10,
				description: 'Stand with your knees slightly bent and your feet shoulder-width apart. Grip a shoulder-width section of the resistance band with both hands in front of you at shoulder height. Keeping your arms straight, pull the band out and back until your shoulder blades contract. Slowly return to starting position.'
			},
			{
				title: 'Lateral walk',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-lateral-walk.jpg?itok=jFD10yki',
				sets: '1',
				repDescription: '8-10 steps in each direction',
				minReps: 8,
				maxReps: 10,
				splitRep: true,
				description: 'Loop one resistance band just above your knees and another around your ankles. Drop into a half squat position with your feet shoulder-width apart to create tension in the bands. Then take a small step to the side, keeping tension in the bands as you move. Do all the steps in one direction, then switch.'
			},
			{
				title: 'Press-up',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-push-up.jpg?itok=AU1e9X1m',
				sets: '1',
				repDescription: '5-15',
				minReps: 5,
				maxReps: 15,
				description: 'Get in a plank position, draping the resistance band across your upper back and holding the ends under your hands. Drop your chest down towards the floor, then contract your glutes and abs and push straight up until your arms are fully extended'
			},
			{
				title: 'Squat to overhead press',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2017/08/resistance-band-squat-to-overhead-press.jpg?itok=tmpjlMiN',
				sets: '1',
				repDescription: '8-10',
				minReps: 8,
				maxReps: 10,
				description: 'Stand on the resistance band with your feet shoulder-width apart. Position your hands at shoulder level with your palms facing up, holding the resistance band. Drop into a squat, then push back up and fully extend your arms so you raise the resistance band overheard. Then lower slowly into another squat.'
			},
		]
	},
	{
		title: 'Träningspass för bättre hållning',
		slug: 'traningspass-for-battre-hallning',
		description: 'Sitter du och spelar hela dagarna kanske? Eller sitter du vid datorn för att du måste? Oavsett så är detta pass perfekt för att hålla dålig hållning en armslängd bort!',
		image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/2019/11/posture-workout-man.jpg?itok=NaSdBliV&timestamp=1574265740',
		exercises: [
			{
				title: 'Cat/cow stretch',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2020/11/cat-cow-stretch.jpg?itok=ScdvQWRD',
				sets: '1',
				repDescription: '20',
				minReps: 20,
				description: `"Get on all fours, with your hands directly under your shoulders and your knees in line with your hips,” says Mahal. “As you exhale, gently arch your spine and raise your head. Hold this position for three seconds, then as you inhale, start to round your back while squeezing your abdominal muscles.”

				Once you have fully rounded your back, tucking your chin into your chest, come back to the starting position and repeat.`
			},
			{
				title: 'Bird dog',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2020/11/bird-dog.jpg?itok=MeE8CwBA',
				sets: '1',
				repDescription: '10 on each side',
				minReps: 10,
				splitRep: true,
				description: `“Start on all fours with your arms in line with your shoulders and knees in line with your hips,” says Mahal. “Lift your right arm and reach forwards until it is extended straight from your shoulder. Simultaneously lift your left leg backwards until it is also fully extended. Hold the position for three seconds and then slowly come back to the starting position. Repeat with the opposite limbs.”`
			},
			{
				title: 'Glute bridge',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2020/11/glute-bridge.jpg?itok=dtjp6I9R',
				sets: '1',
				repDescription: '20',
				minReps: 20,
				description: `“Lie on your back with your knees bent and put your arms out to the sides,” says Mahal. “Tighten your abdominals, squeeze your glutes and raise your hips. Hold the position for three seconds, then lower back to the original position.”`
			},
			{
				title: 'High plank',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2020/11/high-plank.jpg?itok=uNcxD6JS',
				sets: '4',
				repDescription: '20 seconds',
				time: 20,
				description: `“Start by lying with your stomach on the floor and your hands beside you pressing down,” says Mahal. “Engage your abdominals and lift your body so that all your weight is on your hands and toes. Ensure that your hips are down, your glutes are engaged and you are keeping a neutral spine.”`
			},
			{
				title: 'Superman',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2020/11/superman.jpg?itok=JGuvhxiq',
				sets: '1',
				repDescription: '15',
				minReps: 15,
				description: `“Lie on your stomach, reach both hands forwards and extend your arms,” says Mahal. “Lift your chest off the ground but keep looking down. At the same time, lift your legs off the ground and hold for ten seconds. Return to the original position and repeat.”`
			},
			{
				title: 'Half cobra',
				image: 'https://media.istockphoto.com/vectors/woman-practicing-cobra-position-vector-id1182454217?k=6&m=1182454217&s=612x612&w=0&h=ZPY3uhwRF0enxckWuMqTCKqNo8-zIWwDpJAwhbj4TqQ=',
				sets: '1',
				repDescription: '15',
				minReps: 15,
				description: `“Lie flat on your stomach with your forearms touching the ground and your palms facing down,” says Mahal. “Slowly lift your chest up, prop yourself on your elbows and hold for 15 seconds, then carefully return to the original position. Every two or three reps increase the hold time by five seconds so that by the end you are holding the pose for a total of 30 seconds.”`
			},
		]
	},
	{
		title: '30-Day Abs Challenge',
		slug: '30-day-abs-challenge',
		description: `Jaha, där sitter du och sjunker ihop. Men frukta ej, för denna 30 dagars utmaning kommer göra dig rak som en fura!

		Varje vecka i planen innebär att du gör samma träning i fem dagar där du ökar svårighetsgraden genom att lägga till tio sekunder på tiden du utför varje övning varje dag tills du når 60 sekunder.Timern återställs i början av varje vecka, men du lägger också till en övning i träningen.Så i vecka 1 gör du ett träningspass med tre steg, i vecka 2 ett träningspass med fyra steg och så vidare.
		`,
		image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/2018/06/straight-leg-raise.jpg?itok=dfPaUDeT&timestamp=1529925592',
		exercises: [
			{
				title: 'Dead bug',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/2016/06/dead-bug.jpg?itok=mArzmV0U&timestamp=1466783497',
				sets: '3',
				repDescription: '5-10 on each side',
				minReps: 5,
				maxReps: 10,
				splitRep: true,
				description: `Lie on your back with your arms extended towards the ceiling and your legs raised with your knees bent at a 90° angle. Simultaneously lower your right leg, straightening it as you do, and left arm towards the ground, until they are just above the floor, then bring them back up and repeat with the opposite limbs.`
			},
			{
				title: 'Sit-ups',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/shutterstock_177894443.jpg?itok=UrTIZQl8&timestamp=1393257997',
				sets: '3',
				repDescription: '20',
				minReps: 20,
				description: `Lie on your back with your legs bent at the knees and your feet on the floor. Use your core muscles to lift your torso off the ground until it is vertical, then lower back to the start.`
			},
			{
				title: 'The Russian twist',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/2016/07/russian-twist.jpg',
				sets: '3',
				repDescription: '12 on each side',
				minReps: 12,
				splitRep: true,
				description: `Sit on the floor with your legs bent at the knees and feet held just above the ground. Lean back so your upper body is at a 45° angle to the floor. Link your hands together in front of your chest then twist your torso from side to side.`
			},
			{
				title: 'Leg raise',
				image: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/2018/06/straight-leg-raise.jpg',
				sets: '3',
				repDescription: '10',
				minReps: 10,
				description: `Lie on your back. Keeping your legs as straight as you can, raise them until the soles of your feet are facing the ceiling. Lower slowly back to the start.`
			},
			{
				title: 'The mountain climber',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/2016/04/mountain_climbers.jpg?itok=NT5FhG4U&timestamp=1460621157',
				sets: '3',
				repDescription: '24',
				minReps: 24,
				description: `From a press-up position, bring one knee up to your chest at pace, then the other. Continue, alternating knees.`
			},
			{
				title: 'The walking plank',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/2016/12/walking-plank.jpg?itok=HZdCiMOD&timestamp=1482404738',
				sets: '3',
				repDescription: '10',
				minReps: 10,
				description: `From a plank position supported by your forearms, move one hand at a time to get up into a press-up position, then drop back onto your forearms one arm at a time.`
			},
		]
	},
	{
		title: 'Ett träningspass i MMA tappning',
		slug: 'ett-traningspass-i-mma-tappning',
		description: `Välkommen till alla fegisars mardröm, ett träningspass för riktiga kämpar. När du väl har kommit så här långt så finns det ingen idé att sluta, så dra på dig träningskläderna och läs vidare! Kör alla övningar på rad utan vila och vila sedan max 30 sekunder mellan varven och så kör på tills du inte orkar mer. LET'S GO!`,
		image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/16x9_760/public/2019/11/mma-workout-staggered-push-up.jpg?itok=fklRHlMl&timestamp=1574698852',
		exercises: [
			{
				title: 'Shadow boxing: jab + slip + left hook + right cross',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2019/11/mma-workout-jab-slip-left-hook-right-cross.jpg?itok=37XCdk7a',
				sets: '1',
				repDescription: '60 seconds',
				time: 60,
				description: `Stand in the fighter’s position (left foot is forward if you’re right-handed, knees slightly bent) with your guard up (fists in front of your face). To jab, punch your left fist straight out until your arm is horizontal, before retracting. Then slip by moving slightly to the left as if you were dodging a punch aimed at your head. Complete a left hook by turning your arm sideways and punching horizontally at face level. Then finish with a right cross by throwing a straight punch across your body.`
			},
			{
				title: 'Sumo squat',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2019/11/mma-workout-sumo-squat.jpg?itok=nje_lEtT',
				sets: '1',
				repDescription: '60 seconds',
				time: 60,
				description: `Stand with your feet slightly wider than shoulder-width apart and pointing outwards at a 45° angle, with your hands by your sides. Sink down as if you’re sitting on a chair, keeping your centre of gravity over your heels and your knees in line with your toes. You can bring your arms in front of your chest to stabilise yourself. Then stand back up to the starting position.`
			},
			{
				title: 'Side plank (both sides)',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2019/11/mma-workout-side-plank-right.jpg?itok=juURDpBx',
				sets: '1',
				repDescription: '45 seconds on each side',
				time: 45,
				splitRep: true,
				description: `Lie on your side. Place your elbow and forearm on the ground, with your elbow underneath your shoulder. With your outer foot resting on your inner foot and your core tensed, raise your body so you are supported by your forearm and foot. Hold this position, keeping your body in a straight line, for the duration.`
			},
			{
				title: 'Staggered press-up',
				image: 'https://cdn1.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2019/11/mma-workout-staggered-push-up.jpg?itok=wo5owAGZ',
				sets: '1',
				repDescription: '60 seconds',
				time: 60,
				description: `This press-up variation can be done either on your knees or your toes. Begin in a regular press-up position, but with your left hand next to your body just below your ribcage, and your right hand level with your shoulder. Complete one press-up, keeping your elbows tucked in. Then switch your hand position so your left is in line with your shoulder and your right is below your ribcage. Alternate hand position with every rep.`
			},
		]
	}
];

export default data;
