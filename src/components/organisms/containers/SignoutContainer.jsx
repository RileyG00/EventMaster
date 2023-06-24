/*==================================================================================
[0] Imports
==================================================================================*/
import GeneralTextSpan from "../../atoms/text/GeneralTextSpan";
import HeaderSubText from "../../molecules/containers/textBlocks/HeaderSubText";


/*==================================================================================
[1] Generate Final
==================================================================================*/
const SignoutContainer = () => {
    /*==============================================================================
    [1] Constants
    ==============================================================================*/
    const bibleVerses = [
        {verse: '"If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal. If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing. If I give all I possess to the poor and give over my body to hardship that I may boast, but do not have love, I gain nothing. Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."', location: "1 Corinthians 13:1-7"},
        {verse: '"Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they will be comforted. Blessed are the meek, for they will inherit the earth. Blessed are those who hunger and thirst for righteousness, for they will be filled. Blessed are the merciful, for they will be shown mercy. Blessed are the pure in heart, for they will see God. Blessed are the peacemakers, for they will be called children of God. Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven."', location: "Matthew 5:3-10"},
        {verse: '"But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Against such things there is no law. Those who belong to Christ Jesus have crucified the flesh with its passions and desires. Since we live by the Spirit, let us keep in step with the Spirit. Let us not become conceited, provoking and envying each other."', location: "Galatians 5:22-26"},
        {verse: '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose. For those God foreknew he also predestined to be conformed to the image of his Son, that he might be the firstborn among many brothers and sisters. And those he predestined, he also called; those he called, he also justified; those he justified, he also glorified. What, then, shall we say in response to these things? If God is for us, who can be against us?"', location: "Romans 8:28-31"},
        {verse: '"Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ, through whom we have gained access by faith into this grace in which we now stand. And we boast in the hope of the glory of God. Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope. And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit, who has been given to us. You see, at just the right time, when we were still powerless, Christ died for the ungodly. Very rarely will anyone die for a righteous person, though for a good person someone might possibly dare to die. But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."', location: "Romans 5:1-8"},
        {verse: '"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened. Which of you, if your son asks for bread, will give him a stone? Or if he asks for a fish, will give him a snake? If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him! So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets."', location: "Matthew 7:7-12"},
    ];

    const randInt = Math.floor((Math.random()*bibleVerses.length));


    /*==============================================================================
    [2] Return Final
    ==============================================================================*/
    return (
        <div className="general-container flex-column flex-align-center glassmorphism border-radius">
            <HeaderSubText
                headerText="Successfully Signed Out"
                subText={bibleVerses[randInt].verse}
            />
            <br />
            <GeneralTextSpan text={bibleVerses[randInt].location}/>
        </div>
    )
}


export default SignoutContainer;