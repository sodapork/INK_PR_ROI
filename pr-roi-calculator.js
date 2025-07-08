(function() {
    'use strict';
    
    // PR ROI Calculator Widget
    class PRROICalculator {
        constructor(containerId, options = {}) {
            this.container = document.getElementById(containerId);
            this.options = {
                theme: options.theme || 'light',
                currency: options.currency || '$',
                ...options
            };
            
            this.init();
        }
        
        init() {
            this.render();
            this.bindEvents();
        }
        
        render() {
            const themeClass = this.options.theme === 'dark' ? 'pr-roi-dark' : 'pr-roi-light';
            
            this.container.innerHTML = `
                <div class="pr-roi-widget ${themeClass}">
                    <div class="pr-roi-header">
                        <h3>PR ROI Calculator</h3>
                        <p>Estimate potential returns from your marketing investment</p>
                    </div>
                    
                    <div class="pr-roi-form">
                        <div class="form-group">
                            <label for="budget">Marketing Budget (${this.options.currency})</label>
                            <input type="number" id="budget" placeholder="Enter your budget" min="1000" step="1000">
                        </div>
                        
                        <div class="form-group">
                            <label for="service-type">Service Type</label>
                            <select id="service-type">
                                <option value="pr">Public Relations</option>
                                <option value="content">Content Marketing</option>
                                <option value="brand">Brand Marketing</option>
                                <option value="social">Social Media</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="industry">Industry</label>
                            <select id="industry">
                                <option value="tech">Technology</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="finance">Finance</option>
                                <option value="retail">Retail</option>
                                <option value="b2b">B2B Services</option>
                                <option value="startup">Startup</option>
                            </select>
                        </div>
                        
                        <button id="calculate-btn" class="pr-roi-btn">Calculate ROI</button>
                    </div>
                    
                    <div id="results" class="pr-roi-results" style="display: none;">
                        <h4>Estimated Outcomes</h4>
                        <div class="results-grid">
                            <div class="result-card">
                                <div class="result-value" id="impressions">-</div>
                                <div class="result-label">Media Impressions</div>
                            </div>
                            <div class="result-card">
                                <div class="result-value" id="traffic">-</div>
                                <div class="result-label">Traffic Uplift</div>
                            </div>
                            <div class="result-card">
                                <div class="result-value" id="leads">-</div>
                                <div class="result-label">Potential Leads</div>
                            </div>
                            <div class="result-card">
                                <div class="result-value" id="roi">-</div>
                                <div class="result-label">Estimated ROI</div>
                            </div>
                        </div>
                        
                        <div class="pr-roi-disclaimer">
                            <p><strong>*Disclaimer:</strong> All results are estimates based on industry averages and do not reflect final results of an engagement. Actual outcomes may vary significantly based on market conditions, campaign execution, and other factors.</p>
                        </div>
                    </div>
                </div>
            `;
            
            this.addStyles();
        }
        
        addStyles() {
            if (document.getElementById('pr-roi-styles')) return;
            
            const styles = document.createElement('style');
            styles.id = 'pr-roi-styles';
            styles.textContent = `
                .pr-roi-widget {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    max-width: 600px;
                    margin: 0 auto;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                }
                
                .pr-roi-light {
                    background: #ffffff;
                    color: #333;
                }
                
                .pr-roi-dark {
                    background: #1a1a1a;
                    color: #ffffff;
                }
                
                .pr-roi-header {
                    padding: 24px;
                    text-align: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                
                .pr-roi-header h3 {
                    margin: 0 0 8px 0;
                    font-size: 24px;
                    font-weight: 600;
                }
                
                .pr-roi-header p {
                    margin: 0;
                    opacity: 0.9;
                    font-size: 14px;
                }
                
                .pr-roi-form {
                    padding: 24px;
                }
                
                .form-group {
                    margin-bottom: 20px;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    font-size: 14px;
                }
                
                .form-group input,
                .form-group select {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #e1e5e9;
                    border-radius: 8px;
                    font-size: 16px;
                    transition: border-color 0.2s;
                    box-sizing: border-box;
                }
                
                .pr-roi-dark .form-group input,
                .pr-roi-dark .form-group select {
                    background: #2a2a2a;
                    border-color: #404040;
                    color: white;
                }
                
                .form-group input:focus,
                .form-group select:focus {
                    outline: none;
                    border-color: #667eea;
                }
                
                .pr-roi-btn {
                    width: 100%;
                    padding: 14px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                
                .pr-roi-btn:hover {
                    transform: translateY(-2px);
                }
                
                .pr-roi-results {
                    padding: 24px;
                    background: #f8f9fa;
                }
                
                .pr-roi-dark .pr-roi-results {
                    background: #2a2a2a;
                }
                
                .pr-roi-results h4 {
                    margin: 0 0 20px 0;
                    text-align: center;
                    font-size: 20px;
                }
                
                .results-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 16px;
                    margin-bottom: 24px;
                }
                
                .result-card {
                    text-align: center;
                    padding: 16px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                
                .pr-roi-dark .result-card {
                    background: #333;
                }
                
                .result-value {
                    font-size: 24px;
                    font-weight: 700;
                    color: #667eea;
                    margin-bottom: 8px;
                }
                
                .result-label {
                    font-size: 12px;
                    color: #666;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .pr-roi-dark .result-label {
                    color: #aaa;
                }
                
                .pr-roi-disclaimer {
                    padding: 16px;
                    background: #fff3cd;
                    border: 1px solid #ffeaa7;
                    border-radius: 8px;
                    font-size: 12px;
                    line-height: 1.4;
                }
                
                .pr-roi-dark .pr-roi-disclaimer {
                    background: #2d1b69;
                    border-color: #4c1d95;
                }
                
                .pr-roi-disclaimer p {
                    margin: 0;
                }
                
                @media (max-width: 480px) {
                    .pr-roi-widget {
                        margin: 0 16px;
                    }
                    
                    .results-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `;
            
            document.head.appendChild(styles);
        }
        
        bindEvents() {
            const calculateBtn = this.container.querySelector('#calculate-btn');
            calculateBtn.addEventListener('click', () => this.calculateROI());
        }
        
        calculateROI() {
            const budget = parseFloat(document.getElementById('budget').value);
            const serviceType = document.getElementById('service-type').value;
            const industry = document.getElementById('industry').value;
            
            if (!budget || budget < 1000) {
                alert('Please enter a valid budget (minimum $1,000)');
                return;
            }
            
            const results = this.getEstimates(budget, serviceType, industry);
            this.displayResults(results);
        }
        
        getEstimates(budget, serviceType, industry) {
            // Industry multipliers based on search data
            const industryMultipliers = {
                tech: 1.2,
                healthcare: 1.1,
                finance: 1.0,
                retail: 0.9,
                b2b: 1.3,
                startup: 0.8
            };
            
            // Service type multipliers and base metrics
            const serviceMetrics = {
                pr: {
                    impressionsPerDollar: 15,
                    trafficUpliftPercent: 0.25,
                    leadConversionRate: 0.02,
                    roiMultiplier: 3.5
                },
                content: {
                    impressionsPerDollar: 8,
                    trafficUpliftPercent: 0.35,
                    leadConversionRate: 0.03,
                    roiMultiplier: 4.2
                },
                brand: {
                    impressionsPerDollar: 12,
                    trafficUpliftPercent: 0.20,
                    leadConversionRate: 0.015,
                    roiMultiplier: 2.8
                },
                social: {
                    impressionsPerDollar: 20,
                    trafficUpliftPercent: 0.15,
                    leadConversionRate: 0.01,
                    roiMultiplier: 2.1
                }
            };
            
            const multiplier = industryMultipliers[industry] || 1.0;
            const metrics = serviceMetrics[serviceType];
            
            // Calculate estimates
            const impressions = Math.round(budget * metrics.impressionsPerDollar * multiplier);
            const trafficUplift = Math.round(budget * metrics.trafficUpliftPercent * multiplier);
            const leads = Math.round(impressions * metrics.leadConversionRate);
            const roi = Math.round(budget * metrics.roiMultiplier * multiplier);
            
            return {
                impressions: this.formatNumber(impressions),
                traffic: this.formatNumber(trafficUplift),
                leads: this.formatNumber(leads),
                roi: this.options.currency + this.formatNumber(roi)
            };
        }
        
        formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            } else if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'K';
            }
            return num.toString();
        }
        
        displayResults(results) {
            document.getElementById('impressions').textContent = results.impressions;
            document.getElementById('traffic').textContent = results.traffic;
            document.getElementById('leads').textContent = results.leads;
            document.getElementById('roi').textContent = results.roi;
            
            document.getElementById('results').style.display = 'block';
            
            // Smooth scroll to results
            document.getElementById('results').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Make the calculator available globally
    window.PRROICalculator = PRROICalculator;
    
})(); 