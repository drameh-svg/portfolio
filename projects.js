/* Shared project data for the homepage, featured page,
   full projects deck, and individual project pages. */
(function (root) {
    function shot(folder, file, alt) {
        return { src: "img/" + folder + "/" + file, alt: alt };
    }

    var categories = [
        { id: "all", label: "All" },
        { id: "ml", label: "ML & Data Analytics" },
        { id: "product", label: "Product Design" },
        { id: "consulting", label: "Consulting" },
        { id: "brand", label: "Brand Design and Marketing" }
    ];

    var categoryLabels = {
        ml: "ML & Data Analytics",
        product: "Product Design",
        consulting: "Consulting",
        brand: "Brand Design and Marketing"
    };

    var projects = [
        {
            id: "arkadium",
            title: "Arkadium",
            order: 1,
            categories: ["ml", "consulting"],
            year: "2026",
            featured: true,
            summary: "Research scoring 115 gameplay episodes across 5 games and 3 frontier models.",
            blurb: "With Arkadium and the Iovine and Young Academy, this study asks whether frontier models can follow rules when the world is a game. Claude Opus, Gemini, and Grok were scored across 5 games and 115 episodes.",
            lede: "With Arkadium and the Iovine and Young Academy, evaluating whether frontier LLMs can reason under structured, rule-bound conditions.",
            cover: "img/arkadium/1.jpg",
            coverAlt: "Mapping LLM limits through gameplay",
            tags: ["LLM Evaluation", "Research", "Python", "Prompt Design", "Data Analysis"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "We asked a simple question: can frontier models actually follow rules when the world is a game? I helped design and run an evaluation of Claude Opus, Gemini, and Grok across 5 Arkadium games and 115 episodes, scoring every turn in real time as a rule violation, a legal but sub-optimal move, or a strategic one."
                    ]
                },
                {
                    label: "What the scoring showed",
                    paragraphs: [
                        "Models were strong at logical deduction — 94.3% competency on Ancestral Lines — and weak wherever spatial awareness mattered. Play also got worse as sessions ran longer, and 18.1% of all moves were illegal, including nearly a third of Grok's. Gameplay here is a stress test for constraint-following, not just a leaderboard."
                    ],
                    highlights: [
                        "94.3% competency on Ancestral Lines, where the task is logical deduction",
                        "Spatial games were the consistent weak point",
                        "Play degraded as a session ran longer",
                        "18.1% of all moves were illegal, including nearly a third of Grok's"
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("arkadium", "1.jpg", "Mapping LLM Limits Through Gameplay"),
                        shot("arkadium", "2.jpg", "Research question"),
                        shot("arkadium", "3.jpg", "Evaluation overview: 5 games, 3 models, 115 episodes"),
                        shot("arkadium", "4.jpg", "Human evaluation rubric"),
                        shot("arkadium", "5.jpg", "Prompt architecture"),
                        shot("arkadium", "6.jpg", "Finding: models fail at spatial reasoning"),
                        shot("arkadium", "7.jpg", "Finding: performance degrades over a session"),
                        shot("arkadium", "8.jpg", "Finding: illegal move rates by model"),
                        shot("arkadium", "9.jpg", "Finding: one in three moves were not the best choice")
                    ]
                }
            ]
        },
        {
            id: "shadegap",
            title: "The Shade Gap",
            order: 2,
            categories: ["ml", "consulting"],
            year: "2025",
            featured: true,
            summary: "Data visualization, geospatial research, and policy analysis of LA's shade inequality.",
            blurb: "An interactive look at Los Angeles shade inequality: canopy and heat maps, policy context including redlining, and practical responses ahead of the 2028 Olympics, including tree-spacing changes and cool-roof ideas drawn from Shade-LA and New York.",
            lede: "Interactive insights into LA's shade-inequality problem, with data visualizations, policy proposals, strategy ahead of the 2028 Olympics, and cool-roof solutions.",
            cover: "img/projects/project7.png",
            coverAlt: "The Shade Gap",
            tags: ["Figma", "Photoshop", "Geospatial & Policy Research", "Data Visualization", "Consulting"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "For this project we researched the current problem area, identifying key issues and historical practices like redlining which have exacerbated this issue."
                    ]
                },
                {
                    label: "What the maps made visible",
                    paragraphs: [
                        "To communicate the problem more effectively, we used data visualization techniques to map canopy coverage against heat levels, revealing clearly how poorer neighborhoods receive less shade and, as a byproduct, experience higher temperatures and worse health conditions."
                    ]
                },
                {
                    label: "Directions we explored",
                    paragraphs: [
                        "Following the research, we looked for solutions, drawing heavily from Shade-LA. We came up with an easy to implement change to tree spacing guidelines, as well as drawing inspiration from New York's cool-roof solution. We also researched next steps and ways to realistically implement these ideas."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("shade-gap", "1.png", "The Shade Gap"),
                        shot("shade-gap", "2.png", "Shade Gap research"),
                        shot("shade-gap", "3.png", "Shade Gap map"),
                        shot("shade-gap", "4.png", "Canopy and heat comparison"),
                        shot("shade-gap", "5.png", "Shade Gap visualization"),
                        shot("shade-gap", "6.png", "Shade Gap visualization"),
                        shot("shade-gap", "7.png", "Policy context"),
                        shot("shade-gap", "8.png", "Proposed response"),
                        shot("shade-gap", "9.png", "Cool roof reference"),
                        shot("shade-gap", "10.png", "Implementation notes"),
                        shot("shade-gap", "11.png", "Shade Gap closing slide"),
                        shot("projects", "project7.png", "The Shade Gap cover")
                    ]
                }
            ]
        },
        {
            id: "spotify",
            title: "Spotify Data Analysis",
            order: 3,
            categories: ["ml", "consulting"],
            year: "2026",
            featured: true,
            summary: "Genre-specific rollout analysis of how release size, duration, and artist following relate to streams.",
            blurb: "A BUAD 312 consulting analysis for Universal Music Group. The work asks how release size, track duration, and artist followers are associated with streams in Hip-Hop/Rap, Pop, and Latin, then turns those models into pilot recommendations.",
            lede: "A consulting analysis for Universal Music Group on genre-specific rollout: how release size, track duration, and artist following are associated with Spotify streams in Hip-Hop/Rap, Pop, and Latin.",
            cover: "img/spotify/cover.jpg",
            coverAlt: "Genre-specific rollout strategies for streaming growth",
            tags: ["R", "tidyverse", "moderndive", "Regression", "Data Visualization"],
            links: [
                { label: "GitHub repository", href: "https://github.com/drameh-svg/spotify_data_analysis" }
            ],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "The project is a BUAD 312 midterm consulting analysis for Universal Music Group. The stated mission is to help UMG develop practical rollout strategies that increase digital streams. The business question is: how are release size, track duration, and artist followers associated with streams in Hip-Hop/Rap, Pop, and Latin?",
                        "The models are framed as associations, not causes. Release size is categorical (1 track, 2–6 tracks, and 7+ tracks). Duration is measured in minutes. Artist following is modeled as the log of followers and is treated as a marker of audience position, not proof that followers cause streams. Streams were observed in one snapshot, so release year compares cohorts rather than tracking the same songs over time."
                    ]
                },
                {
                    label: "Data",
                    paragraphs: [
                        "The repository analyzes tracks_simplified.csv, a Spotify track table with streams, artist followers, genre, album length, release date, and duration. The presentation reports 5,870 raw tracks, 5,824 cleaned tracks, and a focus sample of 3,199 tracks in the three largest named genres, with release years from 1939 to 2021.",
                        "Hip-Hop/Rap accounts for 1,224 tracks (mean streams 49,132, median 28,460). Pop accounts for 1,633 (mean 27,075, median 14,171). Latin accounts for 342 (mean 46,098, median 26,225). Other/Unknown holds 1,996 tracks and is left out because it does not support a genre strategy. The deck flags Latin results for extra caution because that sample has only 342 tracks."
                    ],
                    images: [
                        shot("spotify", "dataset.jpg", "Dataset overview for Hip-Hop/Rap, Pop, and Latin"),
                        shot("spotify", "skew.jpg", "Raw streams are right-skewed; log streams are more balanced")
                    ]
                },
                {
                    label: "Approach",
                    paragraphs: [
                        "The analysis is written in R, using tidyverse and moderndive. It moves from descriptive comparisons to regression: basic models, parallel models that let genres differ in level, interaction models that let the rollout relationship differ by genre, and a controlled model that holds the other rollout factors and release cohort constant.",
                        "Evaluation uses p-values, R-squared, adjusted R-squared, RMSE, residual plots, and normal Q-Q plots. Coefficients are translated back into predicted percentage differences so the comparison is readable as streams, not only as log-stream slopes. Because raw streams are strongly right-skewed, the outcome is log streams. High stream and follower counts are kept, since deleting hit songs would remove observations the question is about."
                    ]
                },
                {
                    label: "What the charts show before the models",
                    paragraphs: [
                        "Duration slopes down in all three genres. Latin shows the clearest negative slope; Pop and Hip-Hop/Rap are negative but flatter. The follower relationship looks strongest in Hip-Hop/Rap and nearly flat in Pop.",
                        "Release size is grouped as 1 track, 2–6 tracks, and 7+ tracks and compared inside release periods. Singles show strong growth across those periods, especially in Pop and Hip-Hop/Rap. The 2–6 track group for Latin in 2015–2017 contains only 10 tracks."
                    ],
                    images: [
                        shot("spotify", "duration-followers.jpg", "Pre-model charts of duration and artist followers by genre"),
                        shot("spotify", "release-size.jpg", "Median streams by release size across release periods")
                    ]
                },
                {
                    label: "Model comparison",
                    paragraphs: [
                        "Before genre interactions, a full multiple regression is the strongest of the compared models and the lowest RMSE, and it is highly significant (p = 3.03 × 10⁻²⁹). It still explains only a small share of log-stream variation: R² 0.04397, adjusted R² 0.04247, RMSE 1.348. On their own, track duration has the highest single-factor adjusted R² in that comparison (0.01423), release size is next (0.00567), and artist followers are lowest (0.00256) even though the followers model is statistically significant (p = 0.00205).",
                        "A later sensitivity check on the controlled model removes the only observation with a standardized residual beyond 3. Adjusted R² moves from 9.0% to 9.2%, and RMSE moves from 1.312 to 1.310. The deck says the main ranking stays stable. Residual plots still show uneven prediction error, and Q-Q tails depart from normality."
                    ],
                    images: [
                        shot("spotify", "model-comparison.jpg", "Adjusted R-squared across rollout models"),
                        shot("spotify", "diagnostics.jpg", "Residual spread, Q-Q tails, and the sensitivity check")
                    ]
                },
                {
                    label: "Hip-Hop/Rap",
                    paragraphs: [
                        "Artist followers are the factor that holds up for Hip-Hop/Rap. In the controlled comparison, an established artist at the genre's 75th follower percentile is predicted at 28,789 typical streams, against 21,273 for an emerging artist at the 25th percentile: about 35% higher. A doubling of followers is associated with about 8.1% more predicted streams per track, holding duration, release size, and year constant.",
                        "The followers model is significant on its own (p = 3.185 × 10⁻⁶) and after controls (p = 1.19 × 10⁻⁶), with adjusted R² 0.01681 and RMSE 1.304. Release size is not significant in this genre (controlled p = 0.9624). Duration is significant in the simple model (p = 0.004891) and not after controls (p = 0.1506). The Hip-Hop/Rap full model has R² 0.05916, adjusted R² 0.0553, and RMSE 1.276."
                    ],
                    images: [
                        shot("spotify", "hiphop.jpg", "Hip-Hop/Rap predicted streams by artist audience position")
                    ]
                },
                {
                    label: "Pop",
                    paragraphs: [
                        "Release size is the Pop result the deck treats as the clearest predictor. With a single indexed at 100 predicted streams per track, an album track (7+ tracks) is indexed at 76.2 and an EP track (2–6 tracks) at 56.4. The single is 1.31× the predicted streams of an album track and 1.77× an EP track, holding duration, followers, and year constant.",
                        "Release size is significant in the simple model (p = 3.38 × 10⁻⁹) and after controls (p = 3.39 × 10⁻⁶), with adjusted R² 0.02245 and RMSE 1.289. Duration and followers are not significant once controlled (p = 0.1038 and p = 0.6102). The Pop full model has R² 0.03604, adjusted R² 0.03308, and RMSE 1.281."
                    ],
                    images: [
                        shot("spotify", "pop.jpg", "Pop predicted streams per track by release size")
                    ]
                },
                {
                    label: "Latin",
                    paragraphs: [
                        "Duration is the Latin result. Each additional minute is associated with 39.3% lower predicted streams per track. Against the 3.51-minute median, the model predicts 10.7% more streams at 3.31 minutes and 20.1% more at 3.15 minutes. Duration stays significant after controlling for release size, followers, and year (controlled p = 8.465 × 10⁻⁷).",
                        "Release size is also significant for Latin, but it explains less (simple p = 0.03678, controlled p = 0.0329, adjusted R² 0.0135). Artist followers are not significant (controlled p = 0.7162). The Latin full model has R² 0.1026, adjusted R² 0.0892, and RMSE 1.533. Residuals stay within ±3 standard deviations. The deck reads the fit as good enough to set direction for a pilot, not to forecast an exact stream count."
                    ],
                    images: [
                        shot("spotify", "latin.jpg", "Latin duration findings and model summary"),
                        shot("spotify", "latin-residuals.jpg", "Latin residual analysis")
                    ]
                },
                {
                    label: "Recommendations in the deck",
                    paragraphs: [
                        "Hip-Hop/Rap: for developing artists, test campaigns, events, brand partnerships, and collaborations that build audience reach, on a limited budget, and expand only when follower growth shows up as streaming engagement.",
                        "Pop: use a single-first rollout, releasing promising tracks individually before packaging songs that are working into an EP or album. Scale only if streams and saves improve.",
                        "Latin: test 3.1–3.3 minute tracks across 10–20 upcoming releases against comparable tracks near the 3.51-minute median, keep promotion comparable, and watch completion, saves, and playlist adds.",
                        "The pilot rule in the deck is to expand a strategy only after it improves streams without weakening listener engagement or campaign returns."
                    ],
                    images: [
                        shot("spotify", "recommendations.jpg", "Genre-specific pilot recommendations")
                    ]
                },
                {
                    label: "Limits",
                    paragraphs: [
                        "The repository's own writeup treats the work as observational. Streams are a snapshot, so release year is a cohort, not a history of the same songs. Followers may have grown after a song succeeded. The file does not include marketing spend, playlist placement, costs, or margins, and tracks from the same artist or album may not be independent. A higher predicted stream count is not, by itself, a profit recommendation. Explanatory power stays modest even in the best models here, and the residual checks do not support precise forecasts."
                    ]
                }
            ]
        },
        {
            id: "shift",
            title: "Shift Website",
            order: 4,
            categories: ["product"],
            year: "",
            featured: true,
            summary: "UX/UI and web design for SHIFT SC.",
            blurb: "UX/UI and web design for SHIFT SC.",
            lede: "UX/UI and web design for SHIFT SC.",
            cover: "",
            coverAlt: "",
            placeholder: "Shift",
            tags: ["UX / UI", "Web Design", "Figma"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "UX/UI and web design for SHIFT SC."
                    ]
                }
            ]
        },
        {
            id: "pneumonia",
            title: "Pneumonia Detection",
            order: 5,
            categories: ["ml"],
            year: "2026",
            summary: "Chest X-ray classification comparing a CNN, an SVM, and a random forest.",
            blurb: "A clinical decision-support study comparing a convolutional neural network, an RBF support vector machine, and a random forest on about 5,800 chest X-rays.",
            lede: "Chest X-ray classification comparing a CNN, an SVM, and a random forest as a clinical decision-support study.",
            cover: "img/pneumonia/1.png",
            coverAlt: "Pneumonia detection title slide",
            tags: ["Python", "CNN", "SVM", "Random Forest", "Image Classification"],
            links: [
                { label: "View on GitHub", href: "https://github.com/drameh-svg/MLProjects/tree/main/pneumonia_classification" }
            ],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "This project asks whether machine learning can reliably distinguish pneumonia from healthy lungs in chest X-rays — and whether those predictions can help clinicians screen faster."
                    ]
                },
                {
                    label: "Approach",
                    paragraphs: [
                        "I trained and compared three models on ~5,800 grayscale X-rays: a convolutional neural network, an RBF support vector machine, and a random forest."
                    ]
                },
                {
                    label: "Results",
                    paragraphs: [
                        "Random Forest led on this data scale (82.4% test accuracy, AUC ~0.98), with the CNN close behind at 80%. The models are framed as a second-opinion tool, not a replacement for clinical judgment. Full code lives in the pneumonia_classification folder of my ML projects repo."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("pneumonia", "1.png", "Pneumonia detection title slide"),
                        shot("pneumonia", "2.png", "Problem statement"),
                        shot("pneumonia", "3.png", "The decision we are supporting"),
                        shot("pneumonia", "4.png", "Dataset overview"),
                        shot("pneumonia", "5.png", "Methodology overview"),
                        shot("pneumonia", "6.png", "Data preprocessing and augmentation"),
                        shot("pneumonia", "7.png", "CNN hyperparameter tuning"),
                        shot("pneumonia", "8.png", "SVM hyperparameter tuning"),
                        shot("pneumonia", "9.png", "Random forest results"),
                        shot("pneumonia", "10.png", "Final test results"),
                        shot("pneumonia", "11.png", "Analysis and limitations"),
                        shot("pneumonia", "12.png", "Future recommendations"),
                        shot("pneumonia", "13.png", "Conclusions")
                    ]
                }
            ]
        },
        {
            id: "clothing",
            title: "Clothing Categorization",
            order: 6,
            categories: ["ml"],
            year: "2026",
            summary: "A multilayer perceptron trained from scratch on Fashion-MNIST.",
            blurb: "A neural network written by hand in NumPy — weights, forward pass, backpropagation, and the training loop — trained on Fashion-MNIST's ten clothing classes.",
            lede: "A multilayer perceptron trained from scratch on Fashion-MNIST to classify ten clothing types.",
            cover: "img/clothing/cover.png",
            coverAlt: "Fashion-MNIST clothing classes",
            tags: ["Python", "NumPy", "Neural Networks", "Fashion-MNIST", "Image Classification"],
            links: [
                { label: "View on GitHub", href: "https://github.com/drameh-svg/MLProjects/tree/main/Clothing_Categorization" }
            ],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "This project implements a neural network by hand — weights, forward pass, backpropagation, and training loop in NumPy — then trains it on Fashion-MNIST. The model maps 28×28 grayscale images onto ten classes (T-shirt, trouser, pullover, dress, coat, sandal, shirt, sneaker, bag, and ankle boot)."
                    ]
                },
                {
                    label: "Approach",
                    paragraphs: [
                        "Data is split into train, validation, and test sets, normalized, and run through 60 epochs of minibatch gradient descent. The work sits in my ML projects repo alongside the pneumonia classifier."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("clothing", "cover.png", "Fashion-MNIST clothing classes")
                    ]
                }
            ]
        },
        {
            id: "polarity",
            title: "Polarity",
            order: 7,
            categories: ["product"],
            year: "",
            summary: "UX and UI design for a live client furniture product.",
            blurb: "UX and UI design for a live client furniture website.",
            lede: "UX and UI design for a live client furniture product.",
            cover: "",
            coverAlt: "",
            placeholder: "Polarity",
            tags: ["UX / UI", "Figma", "Client Work"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "UX and UI design for a live client furniture product."
                    ]
                }
            ]
        },
        {
            id: "claude9",
            title: "Claude 9",
            order: 8,
            categories: ["consulting"],
            year: "",
            summary: "A go-to-market layer for Claude so founders can launch, not just build.",
            blurb: "Claude helps founders build. Claude 9, made with Reem K and Rania K, is a go-to-market layer for what happens after the build: intelligence, deploy and host, and optimize.",
            lede: "Claude helps founders build. Claude 9 helps them launch.",
            cover: "img/claude9/4.jpg",
            coverAlt: "Claude 9 title",
            tags: ["GTM Strategy", "Product Strategy", "UI Design", "Consulting"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Claude 9 is a go-to-market layer for Claude, made with Reem K and Rania K. Most vibe-coded apps stall after launch — 25M+ generated, then no users, no revenue, and a loop that starves the coding tools themselves. Claude is strong from idea to build and weak from launch through growth."
                    ]
                },
                {
                    label: "The product",
                    paragraphs: [
                        "Claude 9 fills that gap with three GTM features: Intelligence (ICP targeting, live traffic, competitor gaps), Deploy & Host (one-click AWS, Docker, Kubernetes), and Optimize (autonomous rewrites measured from real data). The work covers the strategy, the product UI, and the five-year prompt-to-product roadmap."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("claude9", "1.png", "Vibe Coding is Dead without GTM"),
                        shot("claude9", "2.png", "25M+ apps generated, most stall post-launch"),
                        shot("claude9", "3.png", "Claude's Weakness"),
                        shot("claude9", "4.jpg", "Claude 9 title"),
                        shot("claude9", "5.jpg", "1 to 100: Claude builds, Claude 9 launches"),
                        shot("claude9", "6.png", "GTM features: Intelligence, Deploy and Host, Optimize"),
                        shot("claude9", "7.png", "Intelligence feature"),
                        shot("claude9", "8.png", "Deploy and Host feature"),
                        shot("claude9", "9.png", "Optimize feature"),
                        shot("claude9", "10.png", "Claude 9 product interface"),
                        shot("claude9", "11.png", "Five-year roadmap"),
                        shot("claude9", "12.png", "The market now"),
                        shot("claude9", "13.png", "If the bubble bursts"),
                        shot("claude9", "14.jpg", "Together, let's reach for the clouds")
                    ]
                }
            ]
        },
        {
            id: "sabi",
            title: "Sabi",
            order: 9,
            categories: ["consulting"],
            year: "",
            summary: "Growth strategy for Sabi Juices that keeps the founder’s values intact.",
            blurb: "Consulting for Carmen Herrera of Sabi Juices: how to scale a Latina-owned, small-batch juice company without flattening the quality, flavors, and community mission it was built on.",
            lede: "Help scale Sabi Juices without sacrificing core founder values.",
            cover: "img/sabi/1.jpg",
            coverAlt: "Sabi Juice Your Mind title",
            tags: ["Growth Strategy", "Brand Strategy", "Founder Advisory", "Consulting"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Consulting for Carmen Herrera, founder of Sabi Juices — a Latina-owned, community-rooted cold-pressed juice company. The brief was growth that does not flatten what the brand was built on: small-batch quality, no HPP shortcuts, Latin-inspired flavors, and a mission around brain health and comunidad. The work sits between growth strategy and founder-led brand, so scaling does not mean giving up the values that made Sabi Sabi."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("sabi", "1.jpg", "Sabi Juice Your Mind title"),
                        shot("sabi", "2.jpg", "Core differentiators — mind, body, and community"),
                        shot("sabi", "3.jpg", "Challenges in the mix"),
                        shot("sabi", "4.jpg", "Comparable successes"),
                        shot("sabi", "5.jpg", "First ingredient: marketing"),
                        shot("sabi", "6.jpg", "Target audience"),
                        shot("sabi", "7.jpg", "Website recommendations"),
                        shot("sabi", "8.jpg", "Social media recommendations"),
                        shot("sabi", "9.jpg", "Distribution and additional revenue"),
                        shot("sabi", "10.jpg", "Sabi Club, merch, and limited-edition flavors"),
                        shot("sabi", "11.jpg", "Sincerely, Sabi"),
                        shot("sabi", "12.jpg", "Cultural presence and community connection"),
                        shot("sabi", "13.jpg", "Next steps and support systems"),
                        shot("sabi", "14.jpg", "Timeline of next steps")
                    ]
                }
            ]
        },
        {
            id: "whiskware",
            title: "Whiskware",
            order: 10,
            categories: ["consulting"],
            year: "",
            summary: "A Snack & Splash sponsorship proposal with Swim Up Hill at LA84 Play Day.",
            blurb: "Snack & Splash places a Whiskware booth inside LA84’s Summer Play Day so kids finish Swim Bowl water-safety activities and leave with character snack packs and reusable containers.",
            lede: "A sponsorship proposal pairing Whiskware by Trove Brands with Swim Up Hill at LA84 Foundation Play Day.",
            cover: "img/whiskware/1.jpg",
            coverAlt: "Swim Up Hill Play Day Whiskware sponsorship title",
            tags: ["Sponsorship", "Partnership Strategy", "Deck Design", "Consulting"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Snack & Splash puts a Whiskware booth inside LA84's annual Summer Play Day: kids complete Swim Bowl water safety activities, then take home character-themed snack packs and reusable lunch containers. The concept gives Whiskware direct exposure to 1,000–2,500 family interactions while expanding Swim Up Hill's water-safety reach. The deck covers concept, rationale, sample outreach, community purpose, and the longer vision of turning Swim Bowl into a partnership-powered event."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("whiskware", "1.jpg", "Swim Up Hill Play Day Whiskware sponsorship title"),
                        shot("whiskware", "2.jpg", "Snack and Splash concept"),
                        shot("whiskware", "3.jpg", "Why the partnership"),
                        shot("whiskware", "4.jpg", "Why snack packs and reusable containers"),
                        shot("whiskware", "5.jpg", "Sample outreach"),
                        shot("whiskware", "6.jpg", "Purpose for the community and Swim Up Hill"),
                        shot("whiskware", "7.jpg", "The vision"),
                        shot("whiskware", "8.jpg", "Thank you")
                    ]
                }
            ]
        },
        {
            id: "moca",
            title: "MOCA",
            order: 11,
            categories: ["brand"],
            year: "2024–2025",
            summary: "Posters, merch, and social for a citywide Teen Night of 500+ guests.",
            blurb: "Communications work for the Museum of Contemporary Art’s Teen Night: posters, stickers, merch, and social for a citywide event of more than 500 teens.",
            lede: "Communications teen intern at the Museum of Contemporary Art — posters, merch, and social for a citywide Teen Night of 500+ guests.",
            cover: "img/projects/project1.png",
            coverAlt: "Museum of Contemporary Art Teen Night",
            tags: ["Photoshop", "Instagram", "TikTok", "Poster Design", "Event Planning"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Planned a citywide teen night of 500+ teens on the communications team. Marketed the event in person and across social media platforms by creating promotional posters, stickers, merch (hoodies and reusable bottles), and video content. Collaborated with artists and museum professionals to promote museum inclusion for underrepresented youth."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("moca", "1.png", "REFLECT Teen Night poster"),
                        shot("moca", "2.png", "ARRIVE / DEPART Teen Night poster"),
                        shot("moca", "3.jpeg", "MOCA Teen Night work"),
                        shot("moca", "4.jpeg", "MOCA Teen Night work"),
                        shot("moca", "5.jpeg", "MOCA Teen Night work"),
                        shot("moca", "6.png", "MOCA Teen Night graphic"),
                        shot("moca", "7.jpeg", "MOCA Teen Night work"),
                        shot("moca", "8.png", "MOCA Teen Night graphic"),
                        shot("moca", "9.jpg", "What is Teen Night promotional poster"),
                        shot("moca", "IMG_0015.jpeg", "Printed ARRIVE Teen Night posters")
                    ]
                }
            ]
        },
        {
            id: "memesocial",
            title: "Meme Social",
            order: 12,
            categories: ["ml"],
            year: "",
            summary: "An interactive site linking social sentiment and posting volume to meme-coin and Bitcoin prices.",
            blurb: "Meme Social visualizes how social-media sentiment and posting volume relate to asset prices, with interactive charts and a scenario simulator fed by LunarCrush.",
            lede: "Discover how social media activity relates to financial assets like Bitcoin and meme coins.",
            cover: "img/memesocial/1.jpg",
            coverAlt: "Meme Social",
            tags: ["Data Visualization", "Sentiment Analysis", "HTML / CSS / JS", "PHP"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Meme Social looks at how social-media sentiment and posting volume relate to asset prices — with an emphasis on separating hype-driven market psychology from fundamentals. The site visualizes that link through interactive charts and a scenario simulator, so users can explore how shifts in online sentiment and trend dynamics may influence future price movements. Sentiment and post-frequency data come from the LunarCrush API."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("memesocial", "1.jpg", "Meme Social"),
                        shot("memesocial", "2.jpg", "Meme Social chart"),
                        shot("memesocial", "3.jpg", "Meme Social chart"),
                        shot("memesocial", "4.jpg", "Meme Social chart"),
                        shot("memesocial", "5.jpg", "Meme Social chart")
                    ]
                }
            ]
        },
        {
            id: "gogo",
            title: "Gogo",
            order: 13,
            categories: ["brand"],
            year: "2025",
            summary: "Poster series for a boot that blends 1960s fashion with West African tailoring.",
            blurb: "GOGO blends bold 1960s fashion with West African tailoring. The posters carry that into print: three colorways of the same walking-boot composition, plus a logo and campaign graphics for PresQ Studios.",
            lede: "Poster series for GOGO — a PresQ Studios brand blending 1960s fashion with West African tailoring.",
            cover: "img/gogo/cover.png",
            coverAlt: "GOGO boot poster",
            tags: ["Poster Design", "Illustration", "Photoshop", "Branding"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "GOGO blends bold 1960s fashion with the timeless artistry of West African tailoring. These posters carry that energy into print: three colorways of the same walking-boot composition, built around the GOGO mark."
                    ]
                },
                {
                    label: "Campaign",
                    paragraphs: [
                        "Alongside the GOGO boot, I designed a supplementary marketing plan, logo, and advertising posters to bring the brand to life."
                    ]
                },
                {
                    label: "Evidence",
                    layout: "grid",
                    images: [
                        shot("gogo", "cover.png", "GOGO cover"),
                        shot("gogo", "poster-orange.png", "GOGO poster, orange"),
                        shot("gogo", "poster-blue.png", "GOGO poster, blue"),
                        shot("gogo", "poster-pink.png", "GOGO poster, pink"),
                        shot("gogo", "1.png", "GOGO campaign graphic"),
                        shot("gogo", "7.png", "GOGO advertising poster"),
                        shot("gogo", "8.png", "GOGO advertising poster"),
                        shot("gogo", "9.png", "GOGO advertising poster")
                    ]
                }
            ]
        },
        {
            id: "estera",
            title: "Estera",
            order: 14,
            categories: ["brand"],
            year: "2025",
            summary: "Brand identity for a European slow-fashion house — logo, color, campaign, and launch materials.",
            blurb: "Estera connects American customers to Europe’s slow, handcrafted fashion houses. The identity covers logo, color, campaign language, and launch materials for site, social, and pitch.",
            lede: "Discover Europe's best fashion — no passport needed.",
            cover: "img/projects/project5.png",
            coverAlt: "Estera brand design",
            tags: ["Brand Identity", "Logo Design", "Art Direction", "Campaign", "E-commerce"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Estera bridges continents, connecting American customers to Europe's best fashion houses. I built the brand system — logo, color, campaign language, and launch materials — around slow, handcrafted European fashion. The identity covers site, social, and pitch work that makes the house feel like a bridge between cultures, not just a storefront."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("estera", "1.png", "Estera campaign: Handcrafted in Europe"),
                        shot("estera", "2.png", "Estera campaign: Pieces you can't find anywhere else"),
                        shot("estera", "3.png", "Estera brand look"),
                        shot("estera", "4.png", "Estera brand look"),
                        shot("estera", "5.png", "Estera brand look"),
                        shot("estera", "6.png", "Estera brand look"),
                        shot("estera", "7.png", "Estera milestones and social"),
                        shot("estera", "9.jpg", "Estera coming soon landing"),
                        shot("estera", "10.jpg", "Estera Quality First campaign"),
                        shot("estera", "11.jpg", "Estera Ethical Labor story"),
                        shot("estera", "12.jpg", "Estera A Sustainable Choice campaign")
                    ]
                }
            ]
        },
        {
            id: "swimuphill",
            title: "Driving Aquatic Inclusion in Africa",
            order: 15,
            categories: ["brand"],
            year: "2026",
            summary: "Event posters for Swim Up Hill’s US/South Africa partnership at Nike Shapa Soweto.",
            blurb: "Two posters for Swim Up Hill’s September 22 event: a photographic aquatic version and a cream print layout covering speakers, an LA28 quick-start, and partner marks.",
            lede: "Event posters for Swim Up Hill's landmark US/South Africa partnership at Nike Shapa Soweto.",
            cover: "img/swimuphill/poster-cream.jpg",
            coverAlt: "Cream event poster for Driving Aquatic Inclusion in Africa",
            tags: ["Poster Design", "Typography", "Layout", "Campaign"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Two posters for Swim Up Hill's September 22 event celebrating a US/South Africa partnership and the pledge to teach one million people to swim. The series covers featured speakers — including Paralympian Jamal Hill — an LA28 quick-start guide, and partner marks from Swim Up Hill, Local Action Marketing, and South African sport institutions. One version is photographic and aquatic; the other is a clean cream layout built for print and social."
                    ]
                },
                {
                    label: "Evidence",
                    layout: "grid",
                    images: [
                        shot("swimuphill", "poster-cream.jpg", "Cream event poster for Driving Aquatic Inclusion in Africa"),
                        shot("swimuphill", "poster-blue.jpg", "Blue photographic poster for Driving Aquatic Inclusion in Africa")
                    ]
                }
            ]
        },
        {
            id: "crocs",
            title: "Crocs x Winter X Games",
            order: 16,
            categories: ["consulting"],
            year: "",
            summary: "WINTR//CORE — a pitch that puts Crocs into extreme sportswear through Winter X Games.",
            blurb: "A high-fashion, high-altitude collab pitch: EVA protection, modular pads, and an extreme silhouette, so Crocs enters extreme sportswear and X Games reaches a wider audience.",
            lede: "WINTR//CORE — a collab that puts Crocs into extreme sportswear through Winter X Games.",
            cover: "img/crocs/6.jpg",
            coverAlt: "Crocs x Winter X Games",
            tags: ["Brand Strategy", "Campaign", "Product Design", "Consulting"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "People started noticing them last winter. This deck pitches Crocs x Winter X Games as a high-fashion, high-altitude collab: EVA protection, modular pads, and an extreme silhouette so wearers become the campaign. Crocs gets a lane in extreme sportswear and a higher price point. X Games gets more viewership, more women, and people who do not already watch sports. The myth is the product — athletes as figures in the sky, Crocs as the thing they wear down."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("crocs", "1.jpg", "People started noticing them last winter"),
                        shot("crocs", "2.jpg", "Mammoth, Aspen, Big Sky"),
                        shot("crocs", "3.jpg", "So did their myth"),
                        shot("crocs", "4.jpg", "2026 Winter X Games"),
                        shot("crocs", "5.jpg", "Crocs x Winter X Games WINTR//CORE collab"),
                        shot("crocs", "6.jpg", "Crocs x X Games"),
                        shot("crocs", "7.jpg", "EVA layers and extreme silhouette"),
                        shot("crocs", "8.jpg", "Why partner with Winter X Games"),
                        shot("crocs", "9.jpg", "Why partner with Crocs"),
                        shot("crocs", "10.jpg", "Why it is compelling and viral"),
                        shot("crocs", "11.jpg", "Thank you")
                    ]
                }
            ]
        },
        {
            id: "vectora",
            title: "Vectora",
            order: 17,
            categories: ["product"],
            year: "Fall 2025",
            summary: "A gamified, social GPS built around the route, not only the destination.",
            blurb: "Vectora is a GPS concept centered on the roads people share. User research with Della Smith, Joanne Chen, and Connie Sun, then a high-fidelity Figma prototype with Renae Wang, presented to Neuron founder Matt Stoner.",
            lede: "A gamified, socially-integrated GPS experience. Think Beli, but for route-making — focused on the journey, not just the destination.",
            cover: "img/vectora/1.jpg",
            coverAlt: "Vectora — a new type of GPS",
            tags: ["User Research", "Figma", "Prototyping", "UX", "Product Design"],
            links: [
                {
                    label: "View Figma prototype",
                    href: "https://www.figma.com/proto/MIFQkTs9nEDeCbDoJeIUix/Neuron-App?page-id=1203%3A5839&node-id=1229-7195&starting-point-node-id=1229%3A7195&scaling=min-zoom&show-proto-sidebar=1"
                }
            ],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Vectora is a concept for a GPS built around the roads we share. I collaborated with Della Smith, Joanne Chen, and Connie Sun on user research, then built a high-fidelity Figma prototype with Renae Wang — grinded out in two days, of course. We presented the work to Matt Stoner, founder of Neuron, and came away with invaluable feedback."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("vectora", "1.jpg", "Vectora — a new type of GPS"),
                        shot("vectora", "2.jpg", "Car rallying with my mom"),
                        shot("vectora", "3.jpg", "The problem — the journey is the experience"),
                        shot("vectora", "4.jpg", "User pain points"),
                        shot("vectora", "5.jpg", "Key takeaways"),
                        shot("vectora", "6.jpg", "Our solution — think Beli, but for route-making"),
                        shot("vectora", "7.jpg", "Walkthrough of the Vectora experience"),
                        shot("vectora", "8.jpg", "Financials"),
                        shot("vectora", "9.jpg", "Thank you"),
                        shot("vectora", "10.jpg", "Features and Figma prototype screens"),
                        shot("vectora", "11.jpg", "Vectora feature flow"),
                        shot("vectora", "12.jpg", "Explore, adjust, engage, gamify"),
                        shot("vectora", "13.jpg", "Vectora prototype screens"),
                        shot("vectora", "14.jpg", "Vectora prototype closing screens")
                    ]
                }
            ]
        },
        {
            id: "mattel",
            title: "Mattel — Tell-A-Tale",
            order: 18,
            categories: ["product"],
            year: "2024",
            summary: "An improv storytelling toy, from ideation through a prototype pitched to Mattel.",
            blurb: "Tell-A-Tale gives kids dice prompts and puppets they can build, with socially and emotionally complex characters. The project runs from user research and a Figma app through Fusion 360 and a business plan pitched to Mattel designers.",
            lede: "Tell-A-Tale: an improv storytelling experience from ideation to prototype.",
            cover: "img/projects/project6.png",
            coverAlt: "Mattel Tell-A-Tale",
            tags: ["Product Design", "Photoshop", "Premiere Pro", "Blender", "Prototyping"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Tell-A-Tale is an improv storytelling experience where anyone can be anything. It consists of dice that give kids prompts for stories and puppets they can build — featuring socially and emotionally complex characters. I created the product from ideation to prototyping and a full business plan, pitching directly to Mattel designers. Work spanned user research, a Figma app, and Fusion 360."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("mattel", "1.png", "Tell-A-Tale"),
                        shot("mattel", "2.png", "Tell-A-Tale research"),
                        shot("mattel", "3.png", "Tell-A-Tale concept"),
                        shot("mattel", "4.png", "Tell-A-Tale prototype"),
                        shot("mattel", "5.png", "Tell-A-Tale app"),
                        shot("mattel", "6.png", "Tell-A-Tale characters"),
                        shot("mattel", "7.png", "Tell-A-Tale presentation"),
                        shot("mattel", "8.png", "Tell-A-Tale presentation")
                    ]
                }
            ]
        },
        {
            id: "resumes",
            title: "Current & Future Creative Resume",
            order: 19,
            categories: ["brand"],
            year: "",
            summary: "Two self-branded resumes — one for now, one for the version still arriving.",
            blurb: "The current resume is muted on purpose. The future one is louder and leaves the dates off. The path ran from references and a paper sketch to a type and color system in Photoshop.",
            lede: "Two self-branded resumes — one for the person I am, one for the person I am growing into.",
            cover: "img/resumes/future.png",
            coverAlt: "Future creative resume",
            tags: ["Layout", "Typography", "Photoshop", "Art Direction"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "The current resume is muted on purpose: restriction, a too-big head, glasses, and the feeling of having more to do than range to do it with. The future one is louder, more relaxed, and leaves the dates off."
                    ]
                },
                {
                    label: "Process",
                    paragraphs: [
                        "Process ran references → vibe → paper sketch → black-and-white layout in Photoshop → a type and color guide → then color, copy, shadows, and the last decorative layer."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("resumes", "future.png", "Future creative resume"),
                        shot("resumes", "current.png", "Current creative resume"),
                        shot("resumes", "process-1.jpg", "Process notes and design choices"),
                        shot("resumes", "process-2.jpg", "Resume references"),
                        shot("resumes", "process-3.jpg", "Current resume style guide"),
                        shot("resumes", "process-4.jpg", "Layout studies"),
                        shot("resumes", "process-5.jpg", "Future resume style guide"),
                        shot("resumes", "process-6.jpg", "Texture and shape studies")
                    ]
                }
            ]
        },
        {
            id: "ethx",
            title: "Eth-X",
            order: 20,
            categories: ["product"],
            year: "",
            summary: "A browser extension and site that surfaces AI bias and makes AI policy easier to read.",
            blurb: "Eth-X detects bias with a self-made adversarial test set, summarizes terms for popular AI products, and offers news, explainers, and a way to file a claim.",
            lede: "A browser extension and website that exposes biases in AI and addresses accessibility gaps in how people learn to use it.",
            cover: "img/ethx/1.png",
            coverAlt: "Eth-X",
            tags: ["Product Design", "AI Literacy", "Research", "Web"],
            links: [],
            sections: [
                {
                    label: "Overview",
                    paragraphs: [
                        "Eth-X is a browser extension and website that exposes biases in AI while also providing tools for underprivileged communities to learn about and use AI. It detects bias using a self-made adversarial test set, breaks down complex AI policies through a summarized terms and conditions page for popular AI brands, and provides interactive resources like news articles and videos to keep users informed about recent news in the field and to bridge the AI literacy gap. Users can also file claims to report misuse or request to add a new company."
                    ]
                },
                {
                    label: "Evidence",
                    images: [
                        shot("ethx", "1.png", "Eth-X"),
                        shot("ethx", "2.png", "Eth-X"),
                        shot("ethx", "3.png", "Eth-X"),
                        shot("ethx", "4.png", "Eth-X"),
                        shot("ethx", "5.png", "Eth-X")
                    ]
                }
            ]
        }
    ];

    root.PORTFOLIO = {
        categories: categories,
        categoryLabels: categoryLabels,
        projects: projects,
        featuredIds: ["arkadium", "shadegap", "spotify", "shift"],
        byId: function (id) {
            for (var i = 0; i < projects.length; i++) {
                if (projects[i].id === id) return projects[i];
            }
            return null;
        },
        sorted: function () {
            return projects.slice().sort(function (a, b) { return a.order - b.order; });
        },
        inCategory: function (filter) {
            return this.sorted().filter(function (project) {
                if (filter === "all") return true;
                return project.categories.indexOf(filter) !== -1;
            });
        },
        labelFor: function (id) {
            return categoryLabels[id] || id;
        },
        labelsFor: function (project) {
            var self = this;
            return project.categories.map(function (id) { return self.labelFor(id); });
        }
    };
})(typeof globalThis !== "undefined" ? globalThis : this);
