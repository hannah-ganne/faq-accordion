export default function Description({ question }) {
    const data = {
        "1":
            "Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.",
        "2":
            `The best (and quickest) way to get help on a challenge is in our Slack community. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Slack community here.`,
        "3":
            "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
        "4":
            `We don't provide "official" solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback.`,
        "5":
            "Frontend Mentor is a collaborative learning community where everyone can give feedback to each other.If you'd like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you're much more likely to receive valuable feedback from others."
    }

    return <div>{data[question]}</div>
}