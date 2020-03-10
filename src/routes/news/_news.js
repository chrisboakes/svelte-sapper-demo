let testData = [
	{
		title: 'Coronavirus Q&A: how will businesses and the economy cope as Covid-19 takes hold? Our expert answers your questions',
	},
	{
		title: 'Markets regain ground after Monday rout – live updates',
	},
	{
		title: '5 horrific mistakes the world made during the financial crisis that we mustn\'t repeat with coronavirus',
	},
	{
		title: 'How coronavirus is rising in different countries: UK among countries to see fastest increase',
	}
];

testData.forEach( item => {
	item.slug = encodeURI(item.title.toLowerCase());
});

export default testData;
