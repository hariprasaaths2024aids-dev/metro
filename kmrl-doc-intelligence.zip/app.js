// Sample KMRL Documents Data
const documentsData = {
  "documents": [
    {
      "id": "INC-2025-001",
      "type": "Incident Report",
      "category": "Safety",
      "department": "Operations",
      "priority": "High",
      "date_created": "2025-09-10",
      "language": "English",
      "title": "Minor Derailment at Aluva Station",
      "summary": "Train experienced minor wheel slip during station approach. No injuries reported. Service delayed by 15 minutes.",
      "content": "At 14:30 hrs on 10-09-2025, Train 1205 (Aluva-Petta service) experienced a minor derailment while approaching Platform 1 at Aluva Station. The incident occurred due to excessive speed (35 kmph) while entering the station curve (recommended speed: 25 kmph). The train operator immediately applied emergency brakes. No passengers were injured. Station staff cordoned off the area and initiated passenger evacuation procedures. Maintenance team responded within 8 minutes. Track inspection revealed minor rail displacement. Service was restored after 15 minutes. Preliminary investigation suggests need for additional speed control measures at station approaches.",
      "stakeholders": ["Operations", "Safety", "Maintenance", "Engineering"],
      "keywords": ["derailment", "safety", "track", "maintenance", "speed control"],
      "action_items": [
        "Install additional speed warning signs at Aluva approach",
        "Conduct driver refresher training on station approach procedures", 
        "Review speed control systems for all stations"
      ],
      "compliance_tags": ["Metro Rail Safety Act", "CMRS Guidelines"]
    },
    {
      "id": "INC-2025-002",
      "type": "Incident Report", 
      "category": "Technical",
      "department": "Engineering",
      "priority": "Medium",
      "date_created": "2025-09-08",
      "language": "English",
      "title": "Power Supply Fluctuation at MG Road Station",
      "summary": "Voltage fluctuation in third rail system caused temporary service interruption. Issue resolved within 20 minutes.",
      "content": "On 08-09-2025 at 16:45 hrs, MG Road Station experienced power supply fluctuations in the 750V DC third rail system. Voltage dropped from 750V to 620V causing automatic train protection systems to activate. Three trains were stranded between MG Road and Maharajas stations. Emergency protocols were activated, and backup power systems engaged. Electrical maintenance team identified a faulty transformer in Substation 3. Temporary bypass was implemented, and normal service resumed at 17:05 hrs. Permanent repairs scheduled for next maintenance window.",
      "stakeholders": ["Engineering", "Operations", "Electrical"],
      "keywords": ["power supply", "third rail", "transformer", "electrical", "maintenance"],
      "action_items": [
        "Replace faulty transformer in Substation 3",
        "Conduct comprehensive electrical system audit", 
        "Update emergency power protocols"
      ],
      "compliance_tags": ["Electrical Safety Regulations", "Metro Technical Standards"]
    },
    {
      "id": "JC-2025-0156",
      "type": "Maintenance Job Card",
      "category": "Preventive Maintenance", 
      "department": "Rolling Stock",
      "priority": "Routine",
      "date_created": "2025-09-11",
      "language": "English",
      "title": "Monthly Inspection - Train Set 1008", 
      "summary": "Routine monthly maintenance inspection for 3-car train set including brake systems, doors, and HVAC.",
      "content": "TRAIN SET: 1008 (3-Car Set) DEPOT: Muttom SCHEDULE: Monthly Preventive Maintenance DURATION: 4 hours TECHNICIANS: Rajesh Kumar (Lead), Suresh Nair, Priya Menon CHECKLIST COMPLETED: ✓ Brake system pressure test (All cars: 8.2-8.5 bar - NORMAL) ✓ Door operation test (All 24 doors - FUNCTIONAL) ✓ HVAC system check (Temperature regulation - OPTIMAL) ✓ Bogie inspection (No wear indicators - ACCEPTABLE) ✓ Pantograph maintenance (Contact strips replaced) ✓ Interior cleaning and sanitization ✓ Emergency equipment verification MATERIALS USED: Contact strips (2 sets), Brake fluid (5L), Cleaning supplies NEXT INSPECTION: 11-10-2025 STATUS: COMPLETED - CLEARED FOR SERVICE",
      "stakeholders": ["Rolling Stock", "Quality Control", "Operations"],
      "keywords": ["preventive maintenance", "train inspection", "brake system", "HVAC", "safety"],
      "action_items": [
        "Schedule next monthly inspection for 11-10-2025",
        "Monitor brake fluid consumption patterns",
        "Update maintenance records in CMMS"
      ],
      "compliance_tags": ["Metro Maintenance Standards", "Safety Certification Requirements"]
    },
    {
      "id": "JC-2025-0157", 
      "type": "Maintenance Job Card",
      "category": "Corrective Maintenance",
      "department": "Infrastructure", 
      "priority": "High",
      "date_created": "2025-09-09",
      "language": "Malayalam",
      "title": "എസ്കലേറ്റർ റിപ്പയർ - കാക്കനാട് സ്റ്റേഷൻ",
      "summary": "കാക്കനാട് സ്റ്റേഷനിലെ അപ് എസ്കലേറ്റർ പ്രവർത്തന വൈകല്യം. മോട്ടോർ യൂണിറ്റ് റീപ്ലേസ്മെന്റ് ആവശ്യം.",
      "content": "സ്ഥലം: കാക്കനാട് മെട്രോ സ്റ്റേഷൻ ഉപകരണം: അപ് എസ്കലേറ്റർ (പ്ലാറ്റ്ഫോം ലെവൽ) തകരാർ വിവരണം: എസ്കലേറ്റർ പെട്ടെന്ന് നിർത്തി, അസാധാരണ ശബ്ദം കേട്ടു റിപ്പോർട്ട് സമയം: 09-09-2025, 10:30 AM ടെക്നീഷ്യൻമാർ: രാജേഷ് കുമാർ, സുനിൽ വർമ്മ പരിശോധന: മോട്ടോർ യൂണിറ്റിൽ ഓവർഹീറ്റിംഗ് കണ്ടെത്തി നടപടി: താൽക്കാലിക സർവീസ് നിർത്തൽ, സ്പെയർ മോട്ടോർ ഓർഡർ ചെയ്തു എസ്റ്റിമേറ്റഡ് റിപ്പയർ സമയം: 2 ദിവസം പകരം സൗകര്യം: എലിവേറ്റർ സേവനം ലഭ്യം",
      "stakeholders": ["Infrastructure", "Station Operations", "Passenger Services"],
      "keywords": ["escalator", "motor repair", "station maintenance", "passenger facility"],
      "action_items": [
        "Order replacement motor unit from approved vendor",
        "Coordinate with station operations for passenger guidance",
        "Schedule repair work during off-peak hours" 
      ],
      "compliance_tags": ["Infrastructure Safety Standards", "Accessibility Requirements"]
    },
    {
      "id": "REG-2025-012",
      "type": "Regulatory Circular",
      "category": "Safety",
      "department": "Safety & Security", 
      "priority": "High",
      "date_created": "2025-09-05",
      "language": "English",
      "title": "Updated Fire Safety Protocols - CMRS Circular 2025/03",
      "summary": "New fire safety protocols mandated by Commissioner of Metro Railway Safety. Implementation required by October 15, 2025.",
      "content": "SUBJECT: Enhanced Fire Safety Protocols for Metro Operations REF: CMRS/Safety/2025/03 DATE: 05-09-2025 TO: All Metro Rail Operators, Station Controllers, Maintenance Personnel NEW REQUIREMENTS: 1. Fire detection systems must be tested weekly (previously monthly) 2. Emergency evacuation drills mandatory every quarter 3. Fire extinguisher training required for all operational staff 4. Thermal imaging inspections of electrical panels monthly 5. Updated signage in English and local language (Malayalam) IMPLEMENTATION TIMELINE: - Training completion: October 1, 2025 - System upgrades: October 10, 2025 - Full compliance: October 15, 2025 PENALTIES: Non-compliance may result in service suspension and penalties up to ₹10 lakhs. CONTACT: Chief Safety Officer for clarifications.",
      "stakeholders": ["Safety & Security", "Operations", "Training", "All Departments"],
      "keywords": ["fire safety", "CMRS", "compliance", "training", "emergency procedures"],
      "action_items": [
        "Schedule fire safety training for all staff by October 1",
        "Upgrade fire detection systems across all stations",
        "Update emergency evacuation procedures", 
        "Install bilingual fire safety signage"
      ],
      "compliance_tags": ["CMRS Circular 2025/03", "Fire Safety Act", "Metro Safety Standards"]
    },
    {
      "id": "REG-2025-013",
      "type": "Policy Document",
      "category": "Environmental",
      "department": "Environment",
      "priority": "Medium",
      "date_created": "2025-09-03", 
      "language": "English",
      "title": "Environmental Impact Assessment Guidelines - Ministry Directive",
      "summary": "Updated EIA guidelines from Ministry of Housing & Urban Affairs for metro expansion projects. Mandatory for Phase 3 planning.",
      "content": "MINISTRY OF HOUSING & URBAN AFFAIRS Environmental Division ENV/METRO/2025/08 New Environmental Impact Assessment Guidelines for Metro Rail Projects APPLICABILITY: All metro rail extensions exceeding 5 km MANDATORY ASSESSMENTS: 1. Air Quality Impact Analysis 2. Noise Pollution Assessment 3. Water Resource Impact Study 4. Biodiversity Impact Assessment 5. Waste Management Plan 6. Carbon Footprint Analysis SUBMISSION REQUIREMENTS: - EIA report within 6 months of project proposal - Public consultation mandatory - Expert committee review - State Pollution Control Board clearance KMRL SPECIFIC: Phase 3 extension (Aluva-Angamaly) requires comprehensive EIA before approval. Timeline: Submit EIA by December 31, 2025 for project approval in Q2 2026.",
      "stakeholders": ["Environment", "Planning", "Engineering", "Executive Management"],
      "keywords": ["environmental impact", "EIA", "ministry directive", "phase 3", "compliance"],
      "action_items": [
        "Initiate EIA study for Phase 3 extension",
        "Engage certified environmental consultants",
        "Schedule public consultation meetings",
        "Coordinate with State Pollution Control Board"
      ],
      "compliance_tags": ["Ministry EIA Guidelines 2025", "Environmental Protection Act", "State Pollution Control Board Norms"]
    },
    {
      "id": "VEN-2025-089", 
      "type": "Purchase Order",
      "category": "Procurement",
      "department": "Procurement",
      "priority": "Medium",
      "date_created": "2025-09-07",
      "language": "English",
      "title": "PO for Third Rail Insulators - Phase 2 Extension",
      "summary": "Purchase order for 500 third rail insulators from approved vendor Bharat Heavy Electricals Ltd for Phase 2 corridor.",
      "content": "PURCHASE ORDER NO: PO/2025/089 VENDOR: Bharat Heavy Electricals Ltd (BHEL) DATE: 07-09-2025 DELIVERY LOCATION: KMRL Stores, Muttom Depot ITEMS: Third Rail Insulators - Type TRI-750V Quantity: 500 units Unit Price: ₹2,450 Total Value: ₹12,25,000 (Twelve Lakhs Twenty-Five Thousand Only) SPECIFICATIONS: 750V DC rated, ceramic composite material, IS 5021:2019 compliant DELIVERY SCHEDULE: 250 units by September 25, 2025; Balance 250 units by October 10, 2025 PAYMENT TERMS: 70% on delivery, 30% after installation acceptance TECHNICAL APPROVAL: Required from Chief Electrical Engineer WARRANTY: 5 years from installation date PENALTIES: 0.5% per week delay (max 10% of order value)",
      "stakeholders": ["Procurement", "Engineering", "Finance", "Stores"],
      "keywords": ["purchase order", "third rail", "insulators", "BHEL", "phase 2"],
      "action_items": [
        "Coordinate delivery schedule with stores department",
        "Arrange technical inspection upon delivery",
        "Process payment as per agreed terms", 
        "Update procurement tracking system"
      ],
      "compliance_tags": ["Procurement Guidelines", "Technical Standards IS 5021:2019", "Vendor Management Policy"]
    },
    {
      "id": "HR-2025-045",
      "type": "HR Policy", 
      "category": "Human Resources",
      "department": "HR",
      "priority": "Medium",
      "date_created": "2025-09-06",
      "language": "Malayalam",
      "title": "കോവിഡ് സുരക്ഷാ മാർഗ്ഗനിർദ്ദേശങ്ങൾ അപ്ഡേറ്റ്",
      "summary": "കെ.എം.ആർ.എൽ ജീവനക്കാർക്കുള്ള പുതിയ കോവിഡ് സുരക്ഷാ പ്രോട്ടോക്കോൾ. ഒക്ടോബർ 1 മുതൽ പ്രാബല്യത്തിൽ വരും.",
      "content": "വിഷയം: കോവിഡ്-19 സുരക്ഷാ മാർഗ്ഗനിർദ്ദേശങ്ങൾ - 2025 അപ്ഡേറ്റ് തീയതി: 06-09-2025 പ്രാബല്യം: 01-10-2025 മുതൽ പുതിയ നിർദ്ദേശങ്ങൾ: 1. മാസ്ക് ധരിക്കൽ - എല്ലാ പൊതു ഇടങ്ങളിലും നിർബന്ധം 2. സാനിറ്റൈസർ ഉപയോഗം - ഓരോ 2 മണിക്കൂറിലും 3. ശാരീരിക അകലം - കുറഞ്ഞത് 1 മീറ്റർ 4. താപനില പരിശോധന - ഡ്യൂട്ടി ആരംഭിക്കുമ്പോൾ 5. വാക്സിനേഷൻ സർട്ടിഫിക്കറ്റ് - അപ്ഡേറ്റ് ചെയ്ത വേണം പാലിക്കാത്തത്: അച്ചടക്ക നടപടികൾ സ്വീകരിക്കും സംശയങ്ങൾക്ക്: HR ഹെൽപ്പ്ഡെസ്ക് - 0484-2331234",
      "stakeholders": ["HR", "All Employees", "Safety"],
      "keywords": ["കോവിഡ്", "സുരക്ഷ", "മാസ്ക്", "വാക്സിനേഷൻ", "ആരോഗ്യം"],
      "action_items": [
        "എല്ലാ ജീവനക്കാർക്കും നിർദ്ദേശം അറിയിക്കുക",
        "മാസ്കും സാനിറ്റൈസറും വിതരണം ചെയ്യുക",
        "പാലന നിരീക്ഷണം സ്ഥാപിക്കുക" 
      ],
      "compliance_tags": ["COVID-19 Guidelines", "Workplace Safety", "Health Ministry Norms"]
    }
  ],
  "statistics": {
    "total_documents": 8,
    "by_type": {
      "Incident Report": 2,
      "Maintenance Job Card": 2, 
      "Regulatory Circular": 1,
      "Policy Document": 1,
      "Purchase Order": 1,
      "HR Policy": 1
    },
    "by_department": {
      "Operations": 1,
      "Engineering": 1,
      "Rolling Stock": 1,
      "Infrastructure": 1,
      "Safety & Security": 1,
      "Environment": 1,
      "Procurement": 1,
      "HR": 1
    },
    "by_priority": {
      "High": 3,
      "Medium": 4,
      "Routine": 1
    },
    "by_language": {
      "English": 6,
      "Malayalam": 2
    }
  }
};

// Global state
let currentView = 'dashboard';
let filteredDocuments = [...documentsData.documents];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing KMRL Document Intelligence System...');
    initializeNavigation();
    initializeFilters();
    initializeUpload();
    loadDashboard();
    loadDocumentLibrary();
    setupLogoNavigation();
    setupNotificationBell();
});

// Navigation Functions
function initializeNavigation() {
    console.log('Setting up navigation...');
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const viewName = this.dataset.view;
            console.log('Navigation clicked:', viewName);
            switchView(viewName);
        });
    });
}

function switchView(viewName) {
    console.log('Switching to view:', viewName);
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[data-view="${viewName}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    // Update page title
    const titles = {
        'dashboard': 'Dashboard',
        'upload': 'Upload Documents',
        'library': 'Document Library',
        'compliance': 'Compliance Center',
        'analytics': 'Analytics',
        'settings': 'Settings'
    };
    
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && titles[viewName]) {
        pageTitle.textContent = titles[viewName];
    }
    
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Show selected view
    const targetView = document.querySelector(`.view.${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
        console.log('View activated:', viewName);
    } else {
        console.error('View not found:', viewName);
    }
    
    // Load view-specific content
    currentView = viewName;
    
    // Special handling for analytics view to initialize charts
    if (viewName === 'analytics') {
        setTimeout(() => {
            initializeCharts();
        }, 200);
    }
}

function setupLogoNavigation() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            switchView('dashboard');
        });
    }
}

function setupNotificationBell() {
    const notificationBell = document.querySelector('.notification-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('3 new compliance alerts pending review', 'warning');
        });
    }
}

// Dashboard Functions
function loadDashboard() {
    console.log('Loading dashboard...');
    updateDashboardStats();
    loadRecentDocuments();
}

function updateDashboardStats() {
    const stats = documentsData.statistics;
    const totalDocsElement = document.getElementById('total-docs');
    const pendingActionsElement = document.getElementById('pending-actions');
    const highPriorityElement = document.getElementById('high-priority');
    const complianceRateElement = document.getElementById('compliance-rate');
    
    if (totalDocsElement) totalDocsElement.textContent = stats.total_documents;
    if (pendingActionsElement) pendingActionsElement.textContent = calculatePendingActions();
    if (highPriorityElement) highPriorityElement.textContent = stats.by_priority.High || 0;
    if (complianceRateElement) complianceRateElement.textContent = '87%';
}

function calculatePendingActions() {
    return documentsData.documents.reduce((total, doc) => {
        return total + (doc.action_items ? doc.action_items.length : 0);
    }, 0);
}

function loadRecentDocuments() {
    const recentDocsContainer = document.getElementById('recent-documents');
    if (!recentDocsContainer) return;
    
    const sortedDocs = [...documentsData.documents]
        .sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
        .slice(0, 5);
    
    recentDocsContainer.innerHTML = sortedDocs.map(doc => `
        <div class="document-item" onclick="openDocumentModal('${doc.id}')">
            <div class="document-info">
                <h5>${doc.title}</h5>
                <p>${doc.department} • ${formatDate(doc.date_created)}</p>
            </div>
            <div class="document-meta">
                <span class="priority-badge priority-${doc.priority.toLowerCase()}">${doc.priority}</span>
            </div>
        </div>
    `).join('');
}

// Document Library Functions
function loadDocumentLibrary() {
    console.log('Loading document library...');
    filteredDocuments = [...documentsData.documents];
    renderDocuments();
}

function initializeFilters() {
    console.log('Initializing filters...');
    // Add small delay to ensure DOM elements exist
    setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        const departmentFilter = document.getElementById('department-filter');
        const priorityFilter = document.getElementById('priority-filter');
        const typeFilter = document.getElementById('type-filter');
        
        if (searchInput) {
            searchInput.addEventListener('input', applyFilters);
        }
        if (departmentFilter) {
            departmentFilter.addEventListener('change', applyFilters);
        }
        if (priorityFilter) {
            priorityFilter.addEventListener('change', applyFilters);
        }
        if (typeFilter) {
            typeFilter.addEventListener('change', applyFilters);
        }
    }, 100);
}

function applyFilters() {
    const searchInput = document.getElementById('search-input');
    const departmentFilter = document.getElementById('department-filter');
    const priorityFilter = document.getElementById('priority-filter');
    const typeFilter = document.getElementById('type-filter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const departmentValue = departmentFilter ? departmentFilter.value : '';
    const priorityValue = priorityFilter ? priorityFilter.value : '';
    const typeValue = typeFilter ? typeFilter.value : '';
    
    filteredDocuments = documentsData.documents.filter(doc => {
        const matchesSearch = !searchTerm || 
            doc.title.toLowerCase().includes(searchTerm) ||
            doc.summary.toLowerCase().includes(searchTerm) ||
            doc.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
        
        const matchesDepartment = !departmentValue || doc.department === departmentValue;
        const matchesPriority = !priorityValue || doc.priority === priorityValue;
        const matchesType = !typeValue || doc.type === typeValue;
        
        return matchesSearch && matchesDepartment && matchesPriority && matchesType;
    });
    
    renderDocuments();
}

function renderDocuments() {
    const documentsGrid = document.getElementById('documents-grid');
    if (!documentsGrid) return;
    
    documentsGrid.innerHTML = filteredDocuments.map(doc => `
        <div class="document-card" onclick="openDocumentModal('${doc.id}')">
            <div class="document-card-header">
                <h4>${doc.title}</h4>
                <span class="priority-badge priority-${doc.priority.toLowerCase()}">${doc.priority}</span>
            </div>
            <div class="document-card-meta">
                <div class="meta-item">
                    <span class="meta-label">Type:</span>
                    <span>${doc.type}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Department:</span>
                    <span>${doc.department}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Date:</span>
                    <span>${formatDate(doc.date_created)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Language:</span>
                    <span>${doc.language}</span>
                </div>
            </div>
            <p>${doc.summary}</p>
            <div class="document-tags">
                ${doc.keywords.slice(0, 3).map(keyword => `<span class="tag">${keyword}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Document Upload Functions
function initializeUpload() {
    console.log('Initializing upload functionality...');
    // Add delay to ensure DOM elements exist
    setTimeout(() => {
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        
        if (!uploadArea || !fileInput) {
            console.warn('Upload elements not found');
            return;
        }
        
        // Drag and drop events
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('dragover');
        });
        
        uploadArea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
            const files = Array.from(e.dataTransfer.files);
            handleFileUpload(files);
        });
        
        // Click to upload
        uploadArea.addEventListener('click', function() {
            fileInput.click();
        });
        
        fileInput.addEventListener('change', function() {
            const files = Array.from(this.files);
            handleFileUpload(files);
        });
    }, 100);
}

function handleFileUpload(files) {
    if (files.length === 0) return;
    
    console.log('Handling file upload:', files.length, 'files');
    
    const uploadArea = document.getElementById('upload-area');
    const uploadProgress = document.getElementById('upload-progress');
    const progressList = document.getElementById('progress-list');
    
    if (!uploadArea || !uploadProgress || !progressList) return;
    
    uploadArea.classList.add('hidden');
    uploadProgress.classList.remove('hidden');
    
    progressList.innerHTML = '';
    
    files.forEach((file, index) => {
        const progressItem = document.createElement('div');
        progressItem.className = 'progress-item';
        progressItem.innerHTML = `
            <div>
                <strong>${file.name}</strong>
                <div style="font-size: 12px; color: var(--color-text-secondary);">Processing...</div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
        `;
        progressList.appendChild(progressItem);
        
        // Simulate processing
        simulateFileProcessing(progressItem, file, index);
    });
}

function simulateFileProcessing(progressItem, file, index) {
    const progressFill = progressItem.querySelector('.progress-fill');
    const statusText = progressItem.querySelector('div div');
    let progress = 0;
    
    const stages = [
        { text: 'Uploading...', duration: 1000 },
        { text: 'Extracting text...', duration: 1500 },
        { text: 'Analyzing content...', duration: 2000 },
        { text: 'Categorizing...', duration: 1000 },
        { text: 'Complete!', duration: 500 }
    ];
    
    let currentStage = 0;
    
    function updateProgress() {
        if (currentStage < stages.length) {
            statusText.textContent = stages[currentStage].text;
            const targetProgress = ((currentStage + 1) / stages.length) * 100;
            
            const interval = setInterval(() => {
                progress += 2;
                progressFill.style.width = Math.min(progress, targetProgress) + '%';
                
                if (progress >= targetProgress) {
                    clearInterval(interval);
                    currentStage++;
                    if (currentStage < stages.length) {
                        setTimeout(updateProgress, 200);
                    } else {
                        progressFill.style.width = '100%';
                        statusText.textContent = 'Complete!';
                        statusText.style.color = 'var(--color-success)';
                    }
                }
            }, stages[currentStage].duration / (targetProgress - (currentStage * 20)));
        }
    }
    
    setTimeout(updateProgress, index * 500);
}

// Modal Functions
function openDocumentModal(documentId) {
    const document = documentsData.documents.find(doc => doc.id === documentId);
    if (!document) return;
    
    // Populate modal content
    const modalTitle = document.getElementById('modal-title');
    const modalType = document.getElementById('modal-type');
    const modalDepartment = document.getElementById('modal-department');
    const modalDate = document.getElementById('modal-date');
    const modalSummary = document.getElementById('modal-summary');
    const modalContent = document.getElementById('modal-content');
    
    if (modalTitle) modalTitle.textContent = document.title;
    if (modalType) modalType.textContent = document.type;
    if (modalDepartment) modalDepartment.textContent = document.department;
    if (modalDate) modalDate.textContent = formatDate(document.date_created);
    if (modalSummary) modalSummary.textContent = document.summary;
    if (modalContent) modalContent.textContent = document.content;
    
    // Set priority with appropriate status class
    const priorityElement = document.getElementById('modal-priority');
    if (priorityElement) {
        priorityElement.textContent = document.priority;
        priorityElement.className = `status status--${getPriorityStatusClass(document.priority)}`;
    }
    
    // Populate action items
    const actionsContainer = document.getElementById('modal-actions');
    if (actionsContainer) {
        actionsContainer.innerHTML = document.action_items.map(action => 
            `<li>${action}</li>`
        ).join('');
    }
    
    // Populate stakeholders
    const stakeholdersContainer = document.getElementById('modal-stakeholders');
    if (stakeholdersContainer) {
        stakeholdersContainer.innerHTML = document.stakeholders.map(stakeholder => 
            `<span class="stakeholder-tag">${stakeholder}</span>`
        ).join('');
    }
    
    // Show modal
    const modal = document.getElementById('document-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeDocumentModal() {
    const modal = document.getElementById('document-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function getPriorityStatusClass(priority) {
    switch(priority.toLowerCase()) {
        case 'high': return 'error';
        case 'medium': return 'warning';
        case 'routine': return 'info';
        default: return 'info';
    }
}

// Analytics Charts
function initializeCharts() {
    console.log('Initializing charts...');
    
    const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
    
    // Department Distribution Chart
    const deptCtx = document.getElementById('departmentChart');
    if (deptCtx && typeof Chart !== 'undefined') {
        try {
            new Chart(deptCtx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(documentsData.statistics.by_department),
                    datasets: [{
                        data: Object.values(documentsData.statistics.by_department),
                        backgroundColor: chartColors,
                        borderWidth: 2,
                        borderColor: 'rgba(255,255,255,0.8)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                usePointStyle: true,
                                font: {
                                    size: 12
                                }
                            }
                        }
                    }
                }
            });
        } catch (e) {
            console.error('Error creating department chart:', e);
        }
    }
    
    // Priority Distribution Chart
    const priorityCtx = document.getElementById('priorityChart');
    if (priorityCtx && typeof Chart !== 'undefined') {
        try {
            new Chart(priorityCtx, {
                type: 'bar',
                data: {
                    labels: Object.keys(documentsData.statistics.by_priority),
                    datasets: [{
                        label: 'Document Count',
                        data: Object.values(documentsData.statistics.by_priority),
                        backgroundColor: chartColors.slice(0, 3),
                        borderWidth: 1,
                        borderRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        } catch (e) {
            console.error('Error creating priority chart:', e);
        }
    }
    
    // Document Types Chart
    const typeCtx = document.getElementById('typeChart');
    if (typeCtx && typeof Chart !== 'undefined') {
        try {
            new Chart(typeCtx, {
                type: 'polarArea',
                data: {
                    labels: Object.keys(documentsData.statistics.by_type),
                    datasets: [{
                        data: Object.values(documentsData.statistics.by_type),
                        backgroundColor: chartColors,
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 10,
                                usePointStyle: true,
                                font: {
                                    size: 11
                                }
                            }
                        }
                    }
                }
            });
        } catch (e) {
            console.error('Error creating type chart:', e);
        }
    }
    
    // Language Distribution Chart
    const langCtx = document.getElementById('languageChart');
    if (langCtx && typeof Chart !== 'undefined') {
        try {
            new Chart(langCtx, {
                type: 'pie',
                data: {
                    labels: Object.keys(documentsData.statistics.by_language),
                    datasets: [{
                        data: Object.values(documentsData.statistics.by_language),
                        backgroundColor: chartColors.slice(0, 2),
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                padding: 15,
                                usePointStyle: true,
                                font: {
                                    size: 12
                                }
                            }
                        }
                    }
                }
            });
        } catch (e) {
            console.error('Error creating language chart:', e);
        }
    }
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const bgColor = type === 'warning' ? 'var(--color-warning)' : 
                   type === 'error' ? 'var(--color-error)' : 'var(--color-success)';
                   
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 12px 16px;
        background: ${bgColor};
        color: white;
        border-radius: 6px;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-shadow: var(--shadow-md);
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Event listeners for interactive elements
document.addEventListener('click', function(e) {
    // Handle modal buttons
    if (e.target.matches('.btn--primary') && e.target.textContent.includes('Route to Departments')) {
        showNotification('Document routed to relevant departments successfully!', 'success');
        closeDocumentModal();
    }
    
    if (e.target.matches('.btn--secondary') && e.target.textContent.includes('Mark as Reviewed')) {
        showNotification('Document marked as reviewed!', 'success');
        closeDocumentModal();
    }
    
    if (e.target.matches('.btn--outline') && e.target.textContent.includes('Export Summary')) {
        showNotification('Document summary exported to PDF!', 'success');
    }
    
    if (e.target.matches('.btn--primary') && e.target.textContent.includes('Save Settings')) {
        showNotification('Settings saved successfully!', 'success');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'Escape' to close modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('document-modal');
        if (modal && !modal.classList.contains('hidden')) {
            closeDocumentModal();
        }
    }
    
    // Press 'Ctrl/Cmd + K' for quick search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        switchView('library');
        setTimeout(() => {
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }, 200);
    }
});

// Initialize on load
console.log('KMRL Document Intelligence System loaded');
console.log(`Sample data: ${documentsData.documents.length} documents available`);