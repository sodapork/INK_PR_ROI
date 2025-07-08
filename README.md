# PR ROI Calculator Widget

A lightweight, embeddable JavaScript widget that estimates potential ROI from PR, content marketing, brand marketing, and social media campaigns. Perfect for embedding in blogs, websites, or marketing materials.

## Features

- **Lightweight**: Single JavaScript file with embedded CSS
- **Embeddable**: Easy to integrate into any website
- **Responsive**: Works on desktop and mobile devices
- **Customizable**: Light/dark themes and currency options
- **Data-Driven**: Based on industry research and statistics

## Quick Start

### 1. Include the Script

Add the calculator script to your HTML:

```html
<script src="pr-roi-calculator.js"></script>
```

### 2. Add a Container

Create a container div where the calculator will be rendered:

```html
<div id="pr-roi-calculator"></div>
```

### 3. Initialize

Initialize the calculator with JavaScript:

```html
<script>
    new PRROICalculator('pr-roi-calculator');
</script>
```

## Customization Options

### Theme Options

```javascript
// Light theme (default)
new PRROICalculator('pr-roi-calculator', {
    theme: 'light'
});

// Dark theme
new PRROICalculator('pr-roi-calculator', {
    theme: 'dark'
});
```

### Currency Options

```javascript
new PRROICalculator('pr-roi-calculator', {
    currency: '$'  // USD
    currency: '€'  // EUR
    currency: '£'  // GBP
    currency: '¥'  // JPY
});
```

## Data Sources & Methodology

The calculator uses industry research data to provide realistic estimates:

### Service Type Metrics

**Public Relations**
- Impressions per dollar: 15
- Traffic uplift: 25% of budget
- Lead conversion rate: 2%
- ROI multiplier: 3.5x

**Content Marketing**
- Impressions per dollar: 8
- Traffic uplift: 35% of budget
- Lead conversion rate: 3%
- ROI multiplier: 4.2x

**Brand Marketing**
- Impressions per dollar: 12
- Traffic uplift: 20% of budget
- Lead conversion rate: 1.5%
- ROI multiplier: 2.8x

**Social Media**
- Impressions per dollar: 20
- Traffic uplift: 15% of budget
- Lead conversion rate: 1%
- ROI multiplier: 2.1x

### Industry Multipliers

- **Technology**: 1.2x (higher engagement)
- **Healthcare**: 1.1x (trusted industry)
- **Finance**: 1.0x (baseline)
- **Retail**: 0.9x (competitive market)
- **B2B Services**: 1.3x (high-value leads)
- **Startup**: 0.8x (limited brand recognition)

## Research Sources

The metrics are based on industry research from:

- [PortMA - Event Marketing Impressions](https://portma.com/resources/articles/how-to-estimate-the-dollar-value-of-event-marketing-impressions/)
- [Movers Development - PR Campaigns](https://moversdev.com/how-to-drive-more-traffic-with-pr-campaigns/)
- [Intero Digital - Content Marketing ROI](https://www.interodigital.com/blog/stats-that-make-the-case-for-content-marketing-roi/)
- [EmailTooltester - Lead Generation Statistics](https://www.emailtooltester.com/en/blog/lead-generation-statistics/)
- [iProspect - Media Performance](https://www.iprospect.com/en-us/insights/meta-search-lift-to-drive-stronger-media-performance/)
- [Umbrex - Cost per Lead Analysis](https://umbrex.com/resources/ultimate-guide-to-company-analysis/ultimate-guide-to-marketing-analysis/cost-per-lead-analysis/)

## Disclaimer

**Important**: All results are estimates based on industry averages and do not reflect final results of an engagement. Actual outcomes may vary significantly based on:

- Market conditions
- Campaign execution quality
- Target audience
- Competitive landscape
- Timing and seasonality
- Brand recognition and reputation

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## File Structure

```
├── pr-roi-calculator.js    # Main widget file
├── demo.html               # Demo page
└── README.md              # This documentation
```

## License

This widget is provided as-is for educational and commercial use. Please ensure compliance with any applicable regulations when using this tool for business purposes.

## Support

For questions or customization requests, please refer to the code comments or create an issue in the repository. 