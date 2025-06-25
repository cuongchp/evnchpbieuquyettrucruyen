// --- Global Data Store (Simulating Backend/LocalStorage) ---
const UPLOADED_PDF_CONTENT = `--- DEMO ---
`;

let appData = {
    currentUser: null, 
    users: [
        { id: 1, username: 'admin', password: 'admin', role: 'Admin', permissions: { draftReport: true, createVote: true, voteList: true, endVote: true, voteHistory: true, documentCabinet: true, adminManagement: true } },
        { id: 2, username: 'Lê Văn Thuyết - CT HĐQT', password: 'user123', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } },
        { id: 3, username: 'demo', password: 'demo', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } },
        { id: 4, username: 'Nguyễn Trần Bảo An - TV HĐQT', password: 'user345', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } },
        { id: 5, username: 'Nguyễn Đức An - TV HĐQT', password: 'user456', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } },
        { id: 6, username: 'Bùi Thế Huy - TV HĐQT', password: 'user567', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } },
        { id: 7, username: 'Nguyễn Phong Danh - TV HĐQT', password: 'demo', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } },
        { id: 8, username: 'Lê Văn Diễn - TV HĐQT', password: 'user789', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } } ,
        { id: 9, username: 'demo1', password: 'demo', role: 'User', permissions: { draftReport: true, createVote: false, voteList: true, endVote: false, voteHistory: true, documentCabinet: true, adminManagement: false } }
    ],
    draftReports: [
        {
            id: 1,
            title: "Dự thảo tờ trình về điều chỉnh ngân sách năm 2025",
            content: "Căn cứ tình hình thực tế kinh doanh trong 6 tháng đầu năm 2025, Công ty đề xuất điều chỉnh ngân sách như sau:\n\n1. Tăng ngân sách đầu tư thiết bị 15%\n2. Điều chỉnh chi phí vận hành theo thực tế\n3. Cập nhật dự báo doanh thu quý III và IV\n\nĐề nghị HĐQT xem xét và cho ý kiến.",
            attachments: [
                { name: "BangDieuChinhNganSach_2025.xlsx", type: "application/vnd.ms-excel", size: 45600 },
                { name: "BaoCaoTaiChinh_6Thang_2025.pdf", type: "application/pdf", size: 125400 }
            ],
            creator: "admin",
            createdDate: "2025-06-20",
            commentDeadline: "2025-06-27", // 5 ngày làm việc
            status: "open", // open, closed, approved
            comments: [
                {
                    id: 1,
                    userId: "Lê Văn Thuyết - CT HĐQT",
                    content: "Đề xuất cần chi tiết hơn về mục đích sử dụng ngân sách đầu tư thiết bị. Đề nghị bổ sung danh mục thiết bị cụ thể.",
                    timestamp: "2025-06-21 09:30",
                    type: "comment"
                }
            ],
            responses: [
                { userId: "Lê Văn Thuyết - CT HĐQT", type: "comment", timestamp: "2025-06-21 09:30" },
                { userId: "demo", type: "approve", timestamp: "2025-06-21 14:20" }
            ]
        }
    ],    votes: [
        { 
            id: 1, 
            refNum: "01/2025/CHP-HĐQT", 
            title: "Biểu quyết báo cáo kiểm toán nội bộ năm 2024", 
            detailedContent: "Các nội dung báo cáo kiểm toán nội bộ năm 2024 của Công ty CP thủy điện Miền Trung", 
            summary: "", 
            attachments: [
                {
                    name: "Báo cáo Kiểm toán nội bộ 2024.pdf", // Display name
                    url:"#", 
                    type: "application/pdf", 
                    size: 120000, 
                    isUploadedPdf: true, 
                    originalUploadedName: "2. TO TRINH LAY Y KIEN.pdf", 
                    uploadedFileContent: UPLOADED_PDF_CONTENT 
                }
            ], 
            date: "01/06/2025", 
            deadlineInfo: "Còn 7 ngày", 
            status: "open", 
            creator: "admin", 
            assignees: ["Lê Văn Thuyết - CT HĐQT", "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", "Nguyễn Trần Bảo An - TV HĐQT", "Nguyễn Đức An - TV HĐQT", "all"], 
            options: ["agree", "disagree", "other"], 
            results: [ 
                {userId: "Lê Văn Thuyết - CT HĐQT", option: "agree", reason: "", timestamp: "02/06/2025 10:00"},
                {userId: "Nguyễn Trần Bảo An - TV HĐQT", option: "agree", reason: "", timestamp: "02/06/2025 14:30"}
            ] 
        },
        { 
            id: 2, 
            refNum: "02/2025/CHP-HĐQT", 
            title: "Phê duyệt kế hoạch đầu tư thiết bị năm 2025", 
            detailedContent: "Kế hoạch đầu tư thiết bị và công nghệ mới phục vụ sản xuất năm 2025 với tổng ngân sách 15 tỷ đồng", 
            summary: "", 
            attachments: [
                {
                    name: "Ke hoach dau tu thiet bi 2025.xlsx", 
                    url:"#", 
                    type: "application/vnd.ms-excel", 
                    size: 85000, 
                    isUploadedPdf: false
                }
            ], 
            date: "10/06/2025", 
            deadlineInfo: "Còn 3 ngày", 
            status: "open", 
            creator: "admin", 
            assignees: ["Lê Văn Thuyết - CT HĐQT", "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", "Nguyễn Trần Bảo An - TV HĐQT", "Nguyễn Đức An - TV HĐQT", "Bùi Thế Huy - TV HĐQT"], 
            options: ["agree", "disagree", "other"], 
            results: [ 
                {userId: "Lê Văn Thuyết - CT HĐQT", option: "agree", reason: "", timestamp: "11/06/2025 09:15"},
                {userId: "Nguyễn Trần Bảo An - TV HĐQT", option: "agree", reason: "Đầu tư cần thiết cho nâng cao hiệu quả", timestamp: "12/06/2025 16:45"},
                {userId: "Bùi Thế Huy - TV HĐQT", option: "disagree", reason: "Cần xem xét lại ngân sách", timestamp: "13/06/2025 08:30"}
            ] 
        },
        { 
            id: 3, 
            refNum: "03/2025/CHP-HĐQT", 
            title: "Thông qua báo cáo tài chính 6 tháng đầu năm 2025", 
            detailedContent: "Báo cáo tài chính 6 tháng đầu năm 2025 và đề xuất điều chỉnh kế hoạch kinh doanh", 
            summary: "", 
            attachments: [
                {
                    name: "Bao cao tai chinh 6T2025.pdf", 
                    url:"#", 
                    type: "application/pdf", 
                    size: 245000, 
                    isUploadedPdf: false
                }
            ], 
            date: "20/06/2025", 
            deadlineInfo: "Còn 5 ngày", 
            status: "open", 
            creator: "admin", 
            assignees: ["Lê Văn Thuyết - CT HĐQT", "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", "Nguyễn Trần Bảo An - TV HĐQT", "Nguyễn Đức An - TV HĐQT", "Bùi Thế Huy - TV HĐQT", "Nguyễn Phong Danh - TV HĐQT"], 
            options: ["agree", "disagree", "other"], 
            results: [ 
                {userId: "Lê Văn Thuyết - CT HĐQT", option: "agree", reason: "", timestamp: "21/06/2025 10:20"},
                {userId: "Nguyễn Đức An - TV HĐQT", option: "agree", reason: "", timestamp: "22/06/2025 11:00"}
            ] 
        },
        { 
            id: 4, 
            refNum: "04/2025/CHP-HĐQT", 
            title: "Quyết định bổ nhiệm Phó Tổng Giám đốc", 
            detailedContent: "Biểu quyết bổ nhiệm ông Trần Văn Nam làm Phó Tổng Giám đốc phụ trách khối kỹ thuật", 
            summary: "", 
            attachments: [], 
            date: "22/06/2025", 
            deadlineInfo: "Còn 2 ngày", 
            status: "open", 
            creator: "admin", 
            assignees: ["Lê Văn Thuyết - CT HĐQT", "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", "Nguyễn Trần Bảo An - TV HĐQT", "Nguyễn Đức An - TV HĐQT", "Bùi Thế Huy - TV HĐQT", "Nguyễn Phong Danh - TV HĐQT", "Lê Văn Diễn - TV HĐQT"], 
            options: ["agree", "disagree", "other"], 
            results: [
                {userId: "Lê Văn Thuyết - CT HĐQT", option: "agree", reason: "", timestamp: "23/06/2025 08:45"},
                {userId: "Nguyễn Trần Bảo An - TV HĐQT", option: "agree", reason: "Ứng viên có năng lực phù hợp", timestamp: "23/06/2025 10:15"},
                {userId: "Nguyễn Đức An - TV HĐQT", option: "agree", reason: "", timestamp: "23/06/2025 14:30"},
                {userId: "Bùi Thế Huy - TV HĐQT", option: "agree", reason: "", timestamp: "24/06/2025 09:10"}
            ] 
        },
        { 
            id: 5, 
            refNum: "05/2025/CHP-HĐQT", 
            title: "Phê duyệt chính sách thưởng cuối năm 2025", 
            detailedContent: "Thông qua chính sách thưởng cuối năm và thưởng Tết Nguyên đán 2026 cho toàn thể CBNV", 
            summary: "", 
            attachments: [
                {
                    name: "Chinh sach thuong cuoi nam 2025.docx", 
                    url:"#", 
                    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
                    size: 67000, 
                    isUploadedPdf: false
                }
            ], 
            date: "23/06/2025", 
            deadlineInfo: "Còn 1 ngày", 
            status: "open", 
            creator: "admin", 
            assignees: ["Lê Văn Thuyết - CT HĐQT", "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", "Nguyễn Trần Bảo An - TV HĐQT"], 
            options: ["agree", "disagree", "other"], 
            results: [
                {userId: "Lê Văn Thuyết - CT HĐQT", option: "agree", reason: "", timestamp: "24/06/2025 07:30"}
            ] 
        },        { 
            id: 6, 
            refNum: "01/2024/CHP-HĐQT", 
            title: "Biểu quyết ngân sách Marketing Q1/2024", 
            detailedContent: "Các nội dung về ngân sách Marketing Q1/2024 của Công ty CP thủy điện Miền Trung", 
            summary: "Ngân sách Marketing Q1/2024 đã được thông qua với 100% đồng ý.", 
            attachments: [], 
            date: "10/01/2024", 
            status: "closed", 
            creator: "admin", 
            assignees: ["Lê Văn Thuyết - CT HĐQT", "Lê Quý Anh Tuấn - TV HĐQT - TGĐ"], 
            results: [
                {userId: "Lê Văn Thuyết - CT HĐQT", option: "agree", reason: "", timestamp: "12/01/2024 10:00"}, 
                {userId: "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", option: "agree", reason: "", timestamp: "12/01/2024 11:30"}
            ] 
        },
        { 
            id: 7, 
            refNum: "05/2024/CHP-HĐQT", 
            title: "Phê duyệt báo cáo tài chính năm 2023", 
            detailedContent: "Thông qua báo cáo tài chính đã được kiểm toán và báo cáo thường niên năm 2023", 
            summary: "Báo cáo tài chính năm 2023 được thông qua với 83% đồng ý (5/6 người biểu quyết).", 
            attachments: [
                {
                    name: "BaoCaoTaiChinh_2023_DaKiemToan.pdf", 
                    url:"#", 
                    type: "application/pdf", 
                    size: 458000, 
                    isUploadedPdf: false
                }
            ], 
            date: "15/03/2024", 
            status: "closed", 
            creator: "admin", 
            assignees: ["Lê Văn Thuyết - CT HĐQT", "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", "Nguyễn Trần Bảo An - TV HĐQT", "Nguyễn Đức An - TV HĐQT", "Bùi Thế Huy - TV HĐQT", "Nguyễn Phong Danh - TV HĐQT"], 
            results: [
                {userId: "Lê Văn Thuyết - CT HĐQT", option: "agree", reason: "", timestamp: "16/03/2024 08:45"}, 
                {userId: "Lê Quý Anh Tuấn - TV HĐQT - TGĐ", option: "agree", reason: "", timestamp: "16/03/2024 09:20"}, 
                {userId: "Nguyễn Trần Bảo An - TV HĐQT", option: "agree", reason: "Báo cáo rõ ràng, đầy đủ", timestamp: "16/03/2024 10:15"}, 
                {userId: "Nguyễn Đức An - TV HĐQT", option: "agree", reason: "", timestamp: "16/03/2024 14:30"}, 
                {userId: "Bùi Thế Huy - TV HĐQT", option: "disagree", reason: "Cần bổ sung thêm thông tin về dự báo", timestamp: "16/03/2024 16:45"}, 
                {userId: "Nguyễn Phong Danh - TV HĐQT", option: "agree", reason: "", timestamp: "17/03/2024 08:00"}
            ] 
        }
    ],
    documents: [ 
        { id: 1, name: "BaoCaoTaiChinh_Q1_2025.pdf", year: "2025", uploader: "admin", uploadDate: "10/04/2025", type: "application/pdf", size: 307200 },
        { id: 2, name: "KeHoachKinhDoanh_2025.docx", year: "2025", uploader: "admin", uploadDate: "15/01/2025", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", size: 102400 },
    ]
};

const GEMINI_API_KEY = ""; 

async function callGeminiAPI(promptText) {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
    let chatHistory = [{ role: "user", parts: [{ text: promptText }] }];
    const payload = { contents: chatHistory };
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error:", errorData);
            throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || response.statusText}`);
        }
        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            console.error("Unexpected API response structure:", data);
            throw new Error("Không nhận được nội dung hợp lệ từ Gemini API.");
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw error; 
    }
}

let customAlertModalInstance = null;
function showCustomAlert(message, title = "Thông báo") {
    if (!customAlertModalInstance) {
        customAlertModalInstance = new bootstrap.Modal(document.getElementById('customAlertModal'));
    }
    document.getElementById('customAlertModalLabel').textContent = title;
    document.getElementById('customAlertModalBody').textContent = message;
    customAlertModalInstance.show();
}

// Global functions for module navigation
window.showModule = function(moduleIdToShow) {
    const allModules = document.querySelectorAll('.module-content');
    allModules.forEach(function(mod) {
        mod.style.display = 'none';
    });
    
    const targetModule = document.getElementById(moduleIdToShow);
    if (targetModule) {
        targetModule.style.display = 'block';
    }
};

window.navigateToModule = function(moduleId) {
    window.showModule(moduleId + 'Module'); 
    const moduleNavLinks = document.querySelectorAll('.module-navbar-custom .nav-link');
    moduleNavLinks.forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.module-navbar-custom .nav-link[data-module="${moduleId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const loginPage = document.getElementById('loginPage');
    const dashboardPage = document.getElementById('dashboardPage');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const logoutButton = document.getElementById('logoutButton');
    const loggedInUserDisplay = document.getElementById('loggedInUserDisplay');
    
    const moduleNavLinks = document.querySelectorAll('.module-navbar-custom .nav-link');
    const moduleContainers = document.querySelectorAll('.module-container');
    const navbarBrandLink = document.querySelector('.main-header .navbar-brand');    const openVotesCard = document.getElementById('openVotesCard');
    const completedVotesCard = document.getElementById('completedVotesCard');
    const openVotesCountEl = document.getElementById('openVotesCount');
    const completedVotesCountEl = document.getElementById('completedVotesCount');
    const draftReportsCountEl = document.getElementById('draftReportsCount');

    const voteRefNumberInput = document.getElementById('voteRefNumberInput');
    const voteRefNumberSuffix = document.getElementById('voteRefNumberSuffix');
    const assigneeAllUsersCheckbox = document.getElementById('assigneeAllUsers');
    const individualUserCheckboxesContainer = document.getElementById('individualUserCheckboxes');
    
    const voteSummaryTextarea = document.getElementById('voteSummary'); 
    
    const summarizeOtherOpinionsButton = document.getElementById('summarizeOtherOpinionsButton'); 
    const otherOpinionsSummaryContainer = document.getElementById('otherOpinionsSummaryContainer');
    const geminiOtherOpinionsSummaryDiv = document.getElementById('geminiOtherOpinionsSummary');
    const otherOpinionsLoadingSpinner = document.getElementById('otherOpinionsLoadingSpinner');

    const currentVoteIdInput = document.getElementById('currentVoteId');
    const exportVoteResultsButton = document.getElementById('exportVoteResultsButton');

    const endVoteListContainer = document.getElementById('endVoteListContainer');    const endVoteDetailContainer = document.getElementById('endVoteDetailContainer');
    const backToEndVoteListButton = document.getElementById('backToEndVoteListButton');
    const executeEndVoteButton = document.getElementById('executeEndVoteButton');    // Draft Report elements
    const createNewDraftButton = document.getElementById('createNewDraftButton');
    const draftReportListContainer = document.getElementById('draftReportListContainer');
    const draftReportDetailContainer = document.getElementById('draftReportDetailContainer');
    const createDraftContainer = document.getElementById('createDraftContainer');
    const backToDraftListButton = document.getElementById('backToDraftListButton');
    const backFromCreateDraftButton = document.getElementById('backFromCreateDraftButton');
    const createDraftForm = document.getElementById('createDraftForm');
    const submitCommentForm = document.getElementById('submitCommentForm');
    const approveCheckbox = document.getElementById('approveCheckbox');
    const commentCheckbox = document.getElementById('commentCheckbox');
    const cancelCommentButton = document.getElementById('cancelCommentButton');
    const commentForm = document.getElementById('commentForm');    const closeDraftButton = document.getElementById('closeDraftButton');
    const customPeriodRadio = document.getElementById('customPeriod');
    const customPeriodDaysInput = document.getElementById('customPeriodDays');
    const savePermissionsButton = document.getElementById('savePermissionsButton');

    function populateUserCheckboxes() {
         if(individualUserCheckboxesContainer) {
            const userCheckboxesHtml = appData.users.filter(u => u.role === 'User').map(user => `
                <div class="form-check">
                    <input class="form-check-input assignee-checkbox-user" type="checkbox" value="${user.username}" id="assignee${user.username.replace(/\s+/g, '_')}">
                    <label class="form-check-label" for="assignee${user.username.replace(/\s+/g, '_')}">${user.username}</label>
                </div>
            `).join('');
            individualUserCheckboxesContainer.innerHTML = userCheckboxesHtml;
        }
    }
      function updateDashboardCounts() {
        if (openVotesCountEl) {
            openVotesCountEl.textContent = appData.votes.filter(v => v.status === 'open').length;
        }
        if (completedVotesCountEl) {
             completedVotesCountEl.textContent = appData.votes.filter(v => v.status === 'closed').length;
        }
        
        // Cập nhật số lượng dự thảo tờ trình cần góp ý
        const draftReportsCountEl = document.getElementById('draftReportsCount');
        if (draftReportsCountEl && appData.currentUser) {
            // Đếm dự thảo tờ trình mở, chưa hết hạn và user chưa góp ý
            const currentDate = new Date();
            const pendingDrafts = appData.draftReports.filter(draft => {
                const isOpen = draft.status === 'open';
                const notExpired = new Date(draft.commentDeadline) > currentDate;
                const notResponded = !draft.responses.find(r => r.userId === appData.currentUser.username);
                return isOpen && notExpired && notResponded;
            });
            draftReportsCountEl.textContent = pendingDrafts.length;
        }
    }
    
    function populateVoteList() {
        const voteListGroup = document.querySelector('#voteListModule .list-group');
        if (!voteListGroup) return;
        voteListGroup.innerHTML = ''; 

        let votesToDisplay = appData.votes.filter(v => v.status === 'open');

        if (appData.currentUser && appData.currentUser.role !== 'Admin') {
            votesToDisplay = votesToDisplay.filter(vote => 
                !vote.results.some(result => result.userId === appData.currentUser.username) &&
                (vote.assignees.includes(appData.currentUser.username) || 
                 (vote.assignees.includes('all') && appData.currentUser.role === 'User'))
            );
        }

        if (votesToDisplay.length === 0) {
            voteListGroup.innerHTML = '<p class="text-center text-muted">Không có phiếu nào đang mở cần bạn biểu quyết.</p>';
            return;
        }

        votesToDisplay.forEach(vote => {
            const item = document.createElement('a');
            item.href = "#";
            item.className = "list-group-item list-group-item-action";
            item.setAttribute('data-vote-id', vote.id); 
            item.innerHTML = `
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${vote.title} (Số: ${vote.refNum || 'N/A'})</h5>
                    <small>${vote.deadlineInfo || 'N/A'}</small>
                </div>
                <p class="mb-1">${vote.summary}</p>
                <small>Người tạo: ${vote.creator} | Ngày tạo: ${vote.date || 'N/A'}</small>
            `;
            voteListGroup.appendChild(item);
        });
         
        if (voteListGroup.children.length === 0) { 
             voteListGroup.innerHTML = '<p class="text-center text-muted">Không có phiếu nào đang mở cần bạn biểu quyết.</p>';
        }
    }
    
    function navigateToModule(moduleId) {
        showModule(moduleId + 'Module'); 
        moduleNavLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.module-navbar-custom .nav-link[data-module="${moduleId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    if (openVotesCard) {
        openVotesCard.addEventListener('click', function() {
            navigateToModule('voteList');
        });
    }    if (completedVotesCard) {
        completedVotesCard.addEventListener('click', function() {
            navigateToModule('voteHistory');
        });
    }

    const draftReportsCard = document.getElementById('draftReportsCard');
    if (draftReportsCard) {
        draftReportsCard.addEventListener('click', function() {
            navigateToModule('draftReport');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const foundUser = appData.users.find(u => u.username === username && u.password === password);

            if (foundUser) {
                appData.currentUser = foundUser;
                loginPage.style.display = 'none';
                dashboardPage.style.display = 'block';
                loginError.style.display = 'none';
                if(loggedInUserDisplay) loggedInUserDisplay.textContent = appData.currentUser.username;
                
                populateAllDynamicContent();
                applyPermissionsToUI(); 
                navigateToModule('dashboardHome'); 

            } else {
                loginError.style.display = 'block';
                 appData.currentUser = null;
            }
        });
    }
      function populateAllDynamicContent(){
        updateDashboardCounts();
        populateVoteList(); 
        populateEndVoteListTable(); 
        populateAdminUserList();
        populateAdminVoteList();
        populatePermissionsTable();
        populateDocumentCabinet();
        populateHistoryAccordion();
        updateVoteRefNumberSuffix(); 
        populateUserCheckboxes();
        populateDraftReportList();
    }

    function applyPermissionsToUI() {
        if (!appData.currentUser) { 
            moduleNavLinks.forEach(link => {
                 link.parentElement.style.display = 'none'; 
            });
            return;
        }

        const permissions = appData.currentUser.permissions;
        let firstVisibleModule = 'dashboardHome'; 
        let foundFirstVisible = false;

        moduleNavLinks.forEach(link => {
            const moduleName = link.getAttribute('data-module');
            if (permissions.hasOwnProperty(moduleName)) {
                if (permissions[moduleName]) {
                    link.parentElement.style.display = ''; 
                    if(!foundFirstVisible){
                        firstVisibleModule = moduleName;
                        foundFirstVisible = true;
                    }
                } else {
                    link.parentElement.style.display = 'none'; 
                }
            } else {
                 link.parentElement.style.display = 'none'; 
            }
        });
        
        const activeLink = document.querySelector('.module-navbar-custom .nav-link.active');
        if (activeLink && activeLink.parentElement.style.display === 'none') {
             navigateToModule(firstVisibleModule); 
        } else if (!activeLink && appData.currentUser) { 
            navigateToModule(firstVisibleModule);
        }
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function (event) {
            event.preventDefault();
            appData.currentUser = null;
            loginPage.style.display = 'flex'; 
            dashboardPage.style.display = 'none';
            if(loginForm) loginForm.reset();
            if(loggedInUserDisplay) loggedInUserDisplay.textContent = "Admin"; 
        });
    }

    function showModule(moduleIdToShow) {
        moduleContainers.forEach(container => {
            container.style.display = 'none';
        });
        const activeModule = document.getElementById(moduleIdToShow);
         if (!appData.currentUser && moduleIdToShow !== 'loginPageModule' && moduleIdToShow !== 'loginPage') { 
            loginPage.style.display = 'flex';
            dashboardPage.style.display = 'none';
            return;
        }

        if (activeModule) {
            activeModule.style.display = 'block';
        }
        
        const moduleNameWithoutSuffix = moduleIdToShow.replace('Module', '');
        const modulesWithoutDirectPermission = ['dashboardHome', 'voteDetail']; 

        if (appData.currentUser && appData.currentUser.permissions &&
            !appData.currentUser.permissions[moduleNameWithoutSuffix] && 
            !modulesWithoutDirectPermission.includes(moduleNameWithoutSuffix) ) { 
             showCustomAlert("Bạn không có quyền truy cập chức năng này.", "Lỗi Phân Quyền");
             navigateToModule('dashboardHome'); 
             return;
        }        // Call specific population functions when a module is shown
        if (moduleIdToShow === 'draftReportModule') {
            showDraftReportList();
            populateDraftReportList();
        } else if (moduleIdToShow === 'createVoteModule') {
            updateVoteRefNumberSuffix();
            populateUserCheckboxes(); 
        } else if (moduleIdToShow === 'voteListModule') {
            populateVoteList();
        } else if (moduleIdToShow === 'endVoteModule') {
            document.getElementById('endVoteListContainer').style.display = 'block';
            document.getElementById('endVoteDetailContainer').style.display = 'none';
            populateEndVoteListTable(); 
        } else if (moduleIdToShow === 'voteHistoryModule') {
            populateHistoryAccordion();
        } else if (moduleIdToShow === 'documentCabinetModule') {
            populateDocumentCabinet(); 
        } else if (moduleIdToShow === 'adminManagementModule' && appData.currentUser && appData.currentUser.permissions.adminManagement) { 
            console.log("[AdminDebug] Showing Admin Management Module. User:", appData.currentUser.username);
            populateAdminUserList();
            populateAdminVoteList();
            populatePermissionsTable();
            
            const firstTabButtonEl = document.getElementById('user-management-tab'); 
            console.log("[AdminDebug] First tab button element (user-management-tab):", firstTabButtonEl);
            if (firstTabButtonEl) {
                document.querySelectorAll('#adminTabs .nav-link').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('#adminTabsContent .tab-pane').forEach(pane => pane.classList.remove('show', 'active'));

                firstTabButtonEl.classList.add('active');
                const targetPaneId = firstTabButtonEl.getAttribute('data-bs-target'); 
                if (targetPaneId) {
                    const targetPaneEl = document.querySelector(targetPaneId);
                    if (targetPaneEl) {
                        targetPaneEl.classList.add('show', 'active');
                        console.log(`[AdminDebug] Successfully activated tab: ${firstTabButtonEl.id} and pane: ${targetPaneId}`);
                    } else {
                        console.error(`[AdminDebug] Pane not found for target: ${targetPaneId}`);
                    }
                } else {
                    console.error(`[AdminDebug] No data-bs-target for first tab button (user-management-tab).`);
                }
            } else {
                console.warn("[AdminDebug] Admin module: First tab button (user-management-tab) not found for initialization.");
            }
        }
    }
    
    moduleNavLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const moduleId = this.getAttribute('data-module');
            navigateToModule(moduleId);
        });
    });
    
    if(navbarBrandLink) {
        navbarBrandLink.addEventListener('click', function(event) {
            event.preventDefault();
            navigateToModule('dashboardHome');
        });
    }

    function updateVoteRefNumberSuffix() {
        if (voteRefNumberSuffix) {
            const currentYear = new Date().getFullYear();
            voteRefNumberSuffix.value = `/${currentYear}/CHP-HĐQT`;
        }
    }
    
    if (assigneeAllUsersCheckbox) {
        assigneeAllUsersCheckbox.addEventListener('change', function() {
            const isChecked = this.checked;
            const currentIndividualCheckboxes = document.querySelectorAll('#individualUserCheckboxes .assignee-checkbox-user');
            currentIndividualCheckboxes.forEach(checkbox => {
                checkbox.checked = isChecked; 
                checkbox.disabled = isChecked; 
            });
        });
    }

     if (individualUserCheckboxesContainer) { 
        individualUserCheckboxesContainer.addEventListener('change', function(event){
            if (event.target.classList.contains('assignee-checkbox-user')) {
                 const currentIndividualCheckboxes = document.querySelectorAll('#individualUserCheckboxes .assignee-checkbox-user');
                if (!event.target.checked && assigneeAllUsersCheckbox.checked) {
                   assigneeAllUsersCheckbox.checked = false;
                    currentIndividualCheckboxes.forEach(cb => cb.disabled = false);
                }
                let allIndividualChecked = true;
                currentIndividualCheckboxes.forEach(cb => {
                    if (!cb.checked) allIndividualChecked = false;
                });

                if (allIndividualChecked && !assigneeAllUsersCheckbox.disabled && currentIndividualCheckboxes.length > 0) { 
                    assigneeAllUsersCheckbox.checked = true;
                     currentIndividualCheckboxes.forEach(cb => cb.disabled = true); 
                }
            }
        });
    }

    const createVoteForm = document.getElementById('createVoteForm');
    if (createVoteForm) {
         createVoteForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const title = document.getElementById('voteTitle').value;
            const summary = document.getElementById('voteSummary').value;
            const voteRefNumInputVal = voteRefNumberInput.value;
            const fullRefNum = `${voteRefNumInputVal}${voteRefNumberSuffix.value}`; 
            const attachmentsInput = document.getElementById('voteAttachments');
            const files = attachmentsInput.files; 
            let attachmentData = []; 
            for (let i = 0; i < files.length; i++) {
                attachmentData.push({ 
                    name: files[i].name, 
                    type: files[i].type, 
                    size: files[i].size, 
                    url: "#" 
                });
            }

            let assignedTo = [];
            if (assigneeAllUsersCheckbox.checked) {
                appData.users.filter(u => u.role === 'User').forEach(u => {
                    if(!assignedTo.includes(u.username)) assignedTo.push(u.username);
                });
                 if (!assignedTo.includes('all')) assignedTo.push('all'); 
            } else {
                 document.querySelectorAll('#individualUserCheckboxes .assignee-checkbox-user:checked').forEach(cb => {
                    if (!assignedTo.includes(cb.value)) assignedTo.push(cb.value);
                 });
            }
            
            if (!title || !summary ) {
                showCustomAlert('Tiêu đề và nội dung biểu quyết là bắt buộc.');
                return;
            }
             if (!voteRefNumInputVal.trim()) {
                showCustomAlert('Số phiếu là bắt buộc.');
                voteRefNumberInput.focus();
                return;
            }
            if (assignedTo.length === 0 && !assigneeAllUsersCheckbox.checked) { 
                showCustomAlert('Vui lòng chọn ít nhất một người dùng để biểu quyết.');
                return;
            }
            
            const newVote = {
                id: appData.votes.length > 0 ? Math.max(...appData.votes.map(v => v.id)) + 1 : 1, 
                refNum: fullRefNum,
                title: title,
                detailedContent: "",
                summary: summary,
                attachments: attachmentData, 
                date: new Date().toLocaleDateString('vi-VN'), 
                deadlineInfo: "Mới tạo", 
                status: "open", 
                creator: appData.currentUser.username, 
                assignees: assignedTo, 
                options: ["agree", "disagree", "other"], 
                results: [] 
            };
            appData.votes.push(newVote); 

            showCustomAlert(`Tạo phiếu thành công! Số phiếu: ${fullRefNum}`);
            createVoteForm.reset(); 
            updateVoteRefNumberSuffix(); 
            assigneeAllUsersCheckbox.checked = false; 
            document.querySelectorAll('#individualUserCheckboxes .assignee-checkbox-user').forEach(checkbox => { 
                checkbox.checked = false;
                checkbox.disabled = false;
            });
            
            updateDashboardCounts();
            populateVoteList();
            populateEndVoteListTable(); 
            populateAdminVoteList(); 
            navigateToModule('voteList'); 
        });
    }

    const voteListContainer = document.getElementById('voteListModule');
    if (voteListContainer) {
         voteListContainer.addEventListener('click', function(event) {
            let targetElement = event.target;
            while (targetElement != null && !targetElement.classList.contains('list-group-item-action')) {
                targetElement = targetElement.parentElement;
            }

            if (targetElement && targetElement.classList.contains('list-group-item-action')) {
                event.preventDefault();
                const voteId = parseInt(targetElement.getAttribute('data-vote-id'));
                const selectedVote = appData.votes.find(v => v.id === voteId);
                if (selectedVote) {
                    populateVoteDetail(selectedVote); 
                    navigateToModule('voteDetail'); 
                } else {
                    showCustomAlert("Không tìm thấy thông tin phiếu biểu quyết.");
                }
            }
        });
    }
    
    function populateVoteDetail(voteData) {
        currentVoteIdInput.value = voteData.id; 
        document.getElementById('detailVoteTitle').textContent = `Chi Tiết Phiếu Biểu Quyết (Số: ${voteData.refNum})`;
        document.getElementById('voteDetailTitleText').textContent = voteData.title;
        document.getElementById('voteDetailSummaryText').textContent = voteData.summary; 
        const attachmentsList = document.getElementById('voteDetailAttachments');
        attachmentsList.innerHTML = ''; 
        if (voteData.attachments && voteData.attachments.length > 0) {
            voteData.attachments.forEach(file => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" onclick="event.preventDefault(); handleAttachmentClick('vote', ${voteData.id}, '${file.name.replace(/'/g, "\\'")}')">${file.name} <i class="fas fa-download"></i></a> (${(file.size / 1024).toFixed(1)} KB)`;
                attachmentsList.appendChild(li);
            });
        } else {
            attachmentsList.innerHTML = '<li>Không có file đính kèm.</li>';
        }
        document.getElementById('submitVoteForm').reset();
        document.getElementById('userDisagreeReason').style.display = 'none';
        document.getElementById('userOtherOpinion').style.display = 'none';

        const userVote = voteData.results.find(r => r.userId === appData.currentUser.username);
        const voteActionSection = document.getElementById('voteActionSection');
        const voteStatusMessage = document.getElementById('voteStatusMessage'); 
        const exportButton = document.getElementById('exportVoteResultsButton');

        const isUserAssigned = voteData.assignees.includes(appData.currentUser.username) || 
                             (voteData.assignees.includes('all') && appData.currentUser.role === 'User');

        if (appData.currentUser.role === 'Admin') {
            voteActionSection.style.display = 'none';
            voteStatusMessage.className = 'alert alert-warning';
            voteStatusMessage.textContent = 'Admin có thể xem chi tiết nhưng không tham gia biểu quyết.';
            voteStatusMessage.style.display = 'block';
        } else if (userVote) {
            voteActionSection.style.display = 'none';
            voteStatusMessage.className = 'alert alert-info';
            voteStatusMessage.textContent = `Bạn đã biểu quyết: ${userVote.option === 'agree' ? 'Đồng ý' : userVote.option === 'disagree' ? 'Không đồng ý' : 'Ý kiến khác'}${userVote.reason ? ' - ' + userVote.reason : ''} vào lúc ${userVote.timestamp}.`;
            voteStatusMessage.style.display = 'block';
        } else if (isUserAssigned) { 
            voteActionSection.style.display = 'block';
            voteStatusMessage.style.display = 'none';
        } else { 
             voteActionSection.style.display = 'none';
             voteStatusMessage.className = 'alert alert-secondary';
             voteStatusMessage.textContent = 'Bạn không được chỉ định để biểu quyết cho phiếu này.';
             voteStatusMessage.style.display = 'block';
        }

        if (voteData.status === 'closed' || (appData.currentUser && appData.currentUser.role === 'Admin')) {
            exportButton.style.display = 'inline-block';
            exportButton.onclick = function() {
                showCustomAlert(`Đang xuất kết quả cho phiếu: "${voteData.title}" (Mô phỏng).`);
            };
        } else {
            exportButton.style.display = 'none';
        }
    }

    const submitVoteForm = document.getElementById('submitVoteForm');
    if (submitVoteForm) {
         const userVoteOptionRadios = submitVoteForm.querySelectorAll('input[name="userVoteOption"]');
         const userDisagreeReasonTextarea = document.getElementById('userDisagreeReason');
         const userOtherOpinionTextarea = document.getElementById('userOtherOpinion');

        userVoteOptionRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                userDisagreeReasonTextarea.style.display = (this.value === 'disagree' && this.checked) ? 'block' : 'none';
                userDisagreeReasonTextarea.required = (this.value === 'disagree' && this.checked);
                
                userOtherOpinionTextarea.style.display = (this.value === 'other' && this.checked) ? 'block' : 'none';
                userOtherOpinionTextarea.required = (this.value === 'other' && this.checked);
            });
        });

        submitVoteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const voteId = parseInt(currentVoteIdInput.value);
            const voteToUpdate = appData.votes.find(v => v.id === voteId);

            if (!voteToUpdate) {
                showCustomAlert("Lỗi: Không tìm thấy phiếu biểu quyết để cập nhật.");
                return;
            }
            if (appData.currentUser.role === 'Admin'){
                 showCustomAlert("Admin không thể tham gia biểu quyết.");
                 return;
            }
            if (voteToUpdate.results.find(r => r.userId === appData.currentUser.username)) {
                showCustomAlert("Bạn đã biểu quyết cho phiếu này rồi.");
                populateVoteList(); 
                navigateToModule('voteList');
                return;
            }
            const isUserAssignedToSubmit = voteToUpdate.assignees.includes(appData.currentUser.username) ||
                                       (voteToUpdate.assignees.includes('all') && appData.currentUser.role === 'User');
            if (!isUserAssignedToSubmit) {
                showCustomAlert("Bạn không được chỉ định để biểu quyết cho phiếu này.");
                return;
            }

            const selectedOption = submitVoteForm.querySelector('input[name="userVoteOption"]:checked').value;
            let reason = "";
            if (selectedOption === 'disagree') {
                reason = userDisagreeReasonTextarea.value.trim();
                if (!reason) {
                    showCustomAlert('Vui lòng nhập lý do không đồng ý.'); 
                    userDisagreeReasonTextarea.focus();
                    return;
                }
            } else if (selectedOption === 'other') {
                reason = userOtherOpinionTextarea.value.trim();
                if (!reason) {
                    showCustomAlert('Vui lòng nhập nội dung ý kiến khác.'); 
                    userOtherOpinionTextarea.focus();
                    return;
                }
            }
            
            voteToUpdate.results.push({
                userId: appData.currentUser.username,
                option: selectedOption,
                reason: reason,
                timestamp: new Date().toLocaleString('vi-VN')
            });

            showCustomAlert('Gửi biểu quyết thành công!'); 
            populateVoteList(); 
            navigateToModule('voteList'); 
        });
    }

    const backToVoteListButton = document.getElementById('backToVoteList');
    if (backToVoteListButton) {
         backToVoteListButton.addEventListener('click', function() {
           navigateToModule('voteList');
        });    }
    
    // Additional placeholder functions for components that need implementation
    function populateEndVoteListTable() {
        const tableBody = document.getElementById('endVoteTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = '';
        
        // Lấy các phiếu đang mở để có thể kết thúc
        const openVotes = appData.votes.filter(v => v.status === 'open');
        
        if (openVotes.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">Không có phiếu nào cần kết thúc.</td></tr>';
            return;
        }
        
        openVotes.forEach((vote, index) => {
            // Tính số người đã biểu quyết
            const totalAssignees = vote.assignees.filter(a => a !== 'all').length;
            const votedCount = vote.results ? vote.results.length : 0;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>
                    <strong>${vote.title}</strong>
                    <br><small class="text-muted">Số: ${vote.refNum}</small>
                </td>
                <td>${vote.date}</td>
                <td>
                    <span class="badge ${votedCount === totalAssignees ? 'bg-success' : 'bg-warning'}">${votedCount}/${totalAssignees}</span>
                    ${vote.deadlineInfo ? `<br><small class="text-muted">${vote.deadlineInfo}</small>` : ''}
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="showEndVoteDetail(${vote.id})">
                        <i class="fas fa-eye"></i> Chi tiết
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        console.log("populateEndVoteListTable loaded", openVotes.length, "open votes");
    }    function populateAdminUserList() {
        const tableBody = document.getElementById('userListTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = '';
        
        if (appData.users.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">Không có người dùng nào.</td></tr>';
            return;
        }
        
        appData.users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>
                    <strong>${user.username}</strong>
                    <br><small class="text-muted">ID: ${user.id}</small>
                </td>
                <td>
                    <span class="badge ${user.role === 'Admin' ? 'bg-danger' : 'bg-primary'}">${user.role}</span>
                </td>
                <td>
                    <button class="btn btn-warning btn-sm me-1" onclick="editUser(${user.id})" title="Chỉnh sửa">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})" title="Xóa" ${user.username === 'admin' ? 'disabled' : ''}>
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        console.log("populateAdminUserList loaded", appData.users.length, "users");
    }    function populateAdminVoteList() {
        const tableBody = document.getElementById('adminVoteListTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = '';
        
        if (appData.votes.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">Chưa có phiếu biểu quyết nào.</td></tr>';
            return;
        }
        
        // Sắp xếp theo ID giảm dần (mới nhất trước)
        const sortedVotes = [...appData.votes].sort((a, b) => b.id - a.id);
        
        sortedVotes.forEach(vote => {
            const totalAssignees = vote.assignees.filter(a => a !== 'all').length;
            const votedCount = vote.results ? vote.results.length : 0;
            
            let statusBadge = '';
            let statusText = '';
            if (vote.status === 'open') {
                statusBadge = 'bg-success';
                statusText = 'Đang mở';
            } else if (vote.status === 'closed') {
                statusBadge = 'bg-secondary';
                statusText = 'Đã đóng';
            }
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vote.id}</td>
                <td>
                    <strong>${vote.title}</strong>
                    <br><small class="text-muted">Số: ${vote.refNum}</small>
                    <br><small class="text-muted">Ngày: ${vote.date}</small>
                    <br><small class="text-muted">Người tạo: ${vote.creator}</small>
                    ${vote.status === 'open' ? `<br><small class="text-info">BQ: ${votedCount}/${totalAssignees}</small>` : ''}
                </td>
                <td>
                    <span class="badge ${statusBadge}">${statusText}</span>
                    ${vote.status === 'open' ? `<br><small class="text-muted">${vote.deadlineInfo || ''}</small>` : ''}
                </td>
                <td>
                    <button class="btn btn-info btn-sm me-1" onclick="viewVoteDetail(${vote.id})" title="Xem chi tiết">
                        <i class="fas fa-eye"></i>
                    </button>
                    ${vote.status === 'open' ? `
                    <button class="btn btn-warning btn-sm me-1" onclick="editVote(${vote.id})" title="Chỉnh sửa">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm me-1" onclick="forceEndVote(${vote.id})" title="Kết thúc ngay">
                        <i class="fas fa-stop"></i>
                    </button>
                    ` : ''}
                    <button class="btn btn-secondary btn-sm" onclick="duplicateVote(${vote.id})" title="Nhân bản">
                        <i class="fas fa-copy"></i>
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        console.log("populateAdminVoteList loaded", appData.votes.length, "votes");
    }    function populatePermissionsTable() {
        const tableBody = document.getElementById('permissionsTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = '';
        
        if (appData.users.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" class="text-center text-muted">Không có người dùng nào.</td></tr>';
            return;
        }
        
        appData.users.forEach(user => {
            const permissions = user.permissions || {};
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <strong>${user.username}</strong>
                    <br><small class="text-muted">${user.role}</small>
                </td>
                <td class="text-center">
                    <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" id="draftReport_${user.id}" 
                               ${permissions.draftReport ? 'checked' : ''} 
                               onchange="updateUserPermission(${user.id}, 'draftReport', this.checked)">
                    </div>
                </td>
                <td class="text-center">
                    <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" id="createVote_${user.id}" 
                               ${permissions.createVote ? 'checked' : ''} 
                               onchange="updateUserPermission(${user.id}, 'createVote', this.checked)">
                    </div>
                </td>
                <td class="text-center">
                    <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" id="voteList_${user.id}" 
                               ${permissions.voteList ? 'checked' : ''} 
                               onchange="updateUserPermission(${user.id}, 'voteList', this.checked)">
                    </div>
                </td>
                <td class="text-center">
                    <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" id="endVote_${user.id}" 
                               ${permissions.endVote ? 'checked' : ''} 
                               onchange="updateUserPermission(${user.id}, 'endVote', this.checked)">
                    </div>
                </td>
                <td class="text-center">
                    <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" id="voteHistory_${user.id}" 
                               ${permissions.voteHistory ? 'checked' : ''} 
                               onchange="updateUserPermission(${user.id}, 'voteHistory', this.checked)">
                    </div>
                </td>
                <td class="text-center">
                    <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" id="documentCabinet_${user.id}" 
                               ${permissions.documentCabinet ? 'checked' : ''} 
                               onchange="updateUserPermission(${user.id}, 'documentCabinet', this.checked)">
                    </div>
                </td>
                <td class="text-center">
                    <div class="form-check d-flex justify-content-center">
                        <input class="form-check-input" type="checkbox" id="adminManagement_${user.id}" 
                               ${permissions.adminManagement ? 'checked' : ''} 
                               ${user.username === 'admin' ? 'checked disabled' : ''} 
                               onchange="updateUserPermission(${user.id}, 'adminManagement', this.checked)">
                    </div>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        console.log("populatePermissionsTable loaded", appData.users.length, "users permissions");
    }

    function populateDocumentCabinet() {
        // Implementation placeholder
        console.log("populateDocumentCabinet called");
    }    function populateHistoryAccordion() {
        const historyAccordion = document.getElementById('historyAccordion');
        if (!historyAccordion) return;
        
        historyAccordion.innerHTML = '';
        
        // Lấy các phiếu đã hoàn thành (status = 'closed')
        const closedVotes = appData.votes.filter(v => v.status === 'closed');
        
        if (closedVotes.length === 0) {
            historyAccordion.innerHTML = `
                <div class="alert alert-info" role="alert">
                    <i class="fas fa-info-circle"></i> Chưa có phiếu biểu quyết nào được hoàn thành.
                </div>
            `;
            return;
        }
        
        // Sắp xếp theo ngày tạo mới nhất
        closedVotes.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        closedVotes.forEach((vote, index) => {
            // Tính toán thống kê kết quả
            const totalAssignees = vote.assignees.filter(a => a !== 'all').length;
            const votedCount = vote.results ? vote.results.length : 0;
            const agreeCount = vote.results ? vote.results.filter(r => r.option === 'agree').length : 0;
            const disagreeCount = vote.results ? vote.results.filter(r => r.option === 'disagree').length : 0;
            const otherCount = vote.results ? vote.results.filter(r => r.option === 'other').length : 0;
            
            // Tỷ lệ phần trăm
            const agreePercent = votedCount > 0 ? Math.round((agreeCount / votedCount) * 100) : 0;
            const disagreePercent = votedCount > 0 ? Math.round((disagreeCount / votedCount) * 100) : 0;
            const otherPercent = votedCount > 0 ? Math.round((otherCount / votedCount) * 100) : 0;
            
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            accordionItem.innerHTML = `
                <h2 class="accordion-header" id="heading${vote.id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${vote.id}" aria-expanded="false" aria-controls="collapse${vote.id}">
                        <div class="w-100">
                            <div class="d-flex justify-content-between align-items-start">
                                <div>
                                    <strong>${vote.title}</strong>
                                    <br><small class="text-muted">Số: ${vote.refNum} | Ngày: ${vote.date}</small>
                                </div>
                                <div class="text-end">
                                    <span class="badge bg-success me-1">Đã hoàn thành</span>
                                    <br><small class="text-muted">${votedCount}/${totalAssignees} người đã BQ</small>
                                </div>
                            </div>
                        </div>
                    </button>
                </h2>
                <div id="collapse${vote.id}" class="accordion-collapse collapse" aria-labelledby="heading${vote.id}" data-bs-parent="#historyAccordion">
                    <div class="accordion-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h6><i class="fas fa-chart-pie text-primary"></i> Kết quả biểu quyết</h6>
                                <div class="mb-3">
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <span><i class="fas fa-thumbs-up text-success"></i> Đồng ý</span>
                                        <span><strong>${agreeCount} (${agreePercent}%)</strong></span>
                                    </div>
                                    <div class="progress mb-2" style="height: 8px;">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: ${agreePercent}%"></div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <span><i class="fas fa-thumbs-down text-danger"></i> Không đồng ý</span>
                                        <span><strong>${disagreeCount} (${disagreePercent}%)</strong></span>
                                    </div>
                                    <div class="progress mb-2" style="height: 8px;">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: ${disagreePercent}%"></div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <span><i class="fas fa-question-circle text-secondary"></i> Ý kiến khác</span>
                                        <span><strong>${otherCount} (${otherPercent}%)</strong></span>
                                    </div>
                                    <div class="progress mb-2" style="height: 8px;">
                                        <div class="progress-bar bg-secondary" role="progressbar" style="width: ${otherPercent}%"></div>
                                    </div>
                                </div>
                                
                                ${vote.summary ? `
                                <div class="alert alert-light">
                                    <h6><i class="fas fa-clipboard-list"></i> Tóm tắt kết quả</h6>
                                    <p class="mb-0">${vote.summary}</p>
                                </div>
                                ` : ''}
                            </div>
                            
                            <div class="col-md-6">
                                <h6><i class="fas fa-users text-info"></i> Chi tiết biểu quyết</h6>
                                <div class="list-group" style="max-height: 300px; overflow-y: auto;">
                                    ${vote.results && vote.results.length > 0 ? vote.results.map(result => {
                                        let badgeClass = 'bg-secondary';
                                        let optionText = 'Khác';
                                        let iconClass = 'fas fa-question-circle';
                                        
                                        if (result.option === 'agree') {
                                            badgeClass = 'bg-success';
                                            optionText = 'Đồng ý';
                                            iconClass = 'fas fa-thumbs-up';
                                        } else if (result.option === 'disagree') {
                                            badgeClass = 'bg-danger';
                                            optionText = 'Không đồng ý';
                                            iconClass = 'fas fa-thumbs-down';
                                        }
                                        
                                        return `
                                            <div class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">${result.userId}</div>
                                                    <small class="text-muted">${result.timestamp}</small>
                                                    ${result.reason ? `<br><small><strong>Lý do:</strong> ${result.reason}</small>` : ''}
                                                </div>
                                                <span class="badge ${badgeClass} rounded-pill">
                                                    <i class="${iconClass}"></i> ${optionText}
                                                </span>
                                            </div>
                                        `;
                                    }).join('') : '<div class="alert alert-warning">Không có dữ liệu biểu quyết.</div>'}
                                </div>
                            </div>
                        </div>
                        
                        ${vote.attachments && vote.attachments.length > 0 ? `
                        <hr>
                        <h6><i class="fas fa-paperclip text-dark"></i> Tài liệu đính kèm</h6>
                        <ul class="list-unstyled">
                            ${vote.attachments.map(file => `
                                <li class="mb-1">
                                    <a href="#" onclick="event.preventDefault(); handleAttachmentClick('vote', ${vote.id}, '${file.name.replace(/'/g, "\\'")}')" class="text-decoration-none">
                                        <i class="fas fa-file-${file.type.includes('pdf') ? 'pdf' : file.type.includes('excel') ? 'excel' : file.type.includes('word') ? 'word' : 'alt'} text-muted"></i>
                                        ${file.name}
                                    </a>
                                    <small class="text-muted">(${(file.size / 1024).toFixed(1)} KB)</small>
                                </li>
                            `).join('')}
                        </ul>
                        ` : ''}
                    </div>
                </div>
            `;
            historyAccordion.appendChild(accordionItem);
        });
        
        console.log("populateHistoryAccordion loaded", closedVotes.length, "closed votes");
    }

    // Draft Report Functions
    function populateDraftReportList() {
        const tableBody = document.getElementById('draftReportTableBody');
        if (!tableBody) return;
        
        tableBody.innerHTML = '';
        
        if (appData.draftReports.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">Chưa có dự thảo tờ trình nào.</td></tr>';
            return;
        }
        
        appData.draftReports.forEach((draft, index) => {
            const row = tableBody.insertRow();
            const deadlineDate = new Date(draft.commentDeadline);
            const currentDate = new Date();
            const isExpired = currentDate > deadlineDate;
            
            let statusText = '';
            let statusClass = '';
              if (draft.status === 'approved') {
                statusText = 'Đã thống nhất';
                statusClass = 'bg-success';
            } else if (draft.status === 'closed') {
                statusText = 'Đã đóng góp ý';
                statusClass = 'bg-secondary';
            } else if (isExpired) {
                statusText = 'Hết hạn góp ý';
                statusClass = 'bg-secondary';
            } else {
                statusText = 'Đang góp ý';
                statusClass = 'bg-warning';
            }
            
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${draft.title}</td>
                <td>${new Date(draft.createdDate).toLocaleDateString('vi-VN')}</td>
                <td>${deadlineDate.toLocaleDateString('vi-VN')}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>
                    <button class="btn btn-info btn-sm" onclick="showDraftDetail(${draft.id})">
                        <i class="fas fa-eye"></i> Xem chi tiết
                    </button>
                </td>
            `;
        });
    }
    
    function showDraftReportList() {
        draftReportListContainer.style.display = 'block';
        draftReportDetailContainer.style.display = 'none';
        createDraftContainer.style.display = 'none';
    }
    
    function showDraftDetail(draftId) {
        const draft = appData.draftReports.find(d => d.id === draftId);
        if (!draft) {
            showCustomAlert("Không tìm thấy dự thảo tờ trình.");
            return;
        }
        
        // Populate draft details
        document.getElementById('draftDetailTitle').textContent = draft.title;
        document.getElementById('draftDetailInfo').textContent = 
            `Tạo bởi: ${draft.creator} | Ngày tạo: ${new Date(draft.createdDate).toLocaleDateString('vi-VN')} | Hạn góp ý: ${new Date(draft.commentDeadline).toLocaleDateString('vi-VN')}`;
        document.getElementById('draftContent').textContent = draft.content;
        
        // Populate attachments
        const attachmentsList = document.getElementById('draftAttachments');
        attachmentsList.innerHTML = '';
        if (draft.attachments && draft.attachments.length > 0) {
            draft.attachments.forEach(file => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" onclick="event.preventDefault(); handleAttachmentClick('draft', ${draft.id}, '${file.name.replace(/'/g, "\\'")}')">${file.name} <i class="fas fa-download"></i></a> (${(file.size / 1024).toFixed(1)} KB)`;
                attachmentsList.appendChild(li);
            });
        } else {
            attachmentsList.innerHTML = '<li>Không có file đính kèm.</li>';
        }
          // Check if current user has already responded
        const userResponse = draft.responses.find(r => r.userId === appData.currentUser.username);
        const draftActionSection = document.getElementById('draftActionSection');
        const userResponseStatus = document.getElementById('userResponseStatus');
        const closeDraftSection = document.getElementById('closeDraftSection');
        const deadlineDate = new Date(draft.commentDeadline);
        const currentDate = new Date();
        const isExpired = currentDate > deadlineDate;
        const isCreator = draft.creator === appData.currentUser.username;
        
        // Show close draft section only for creator when draft is still open
        if (isCreator && draft.status === 'open' && !isExpired) {
            closeDraftSection.style.display = 'block';
        } else {
            closeDraftSection.style.display = 'none';
        }
        
        if (userResponse) {
            draftActionSection.style.display = 'none';
            userResponseStatus.style.display = 'block';
            userResponseStatus.className = 'alert alert-info';
            if (userResponse.type === 'approve') {
                userResponseStatus.textContent = `Bạn đã thống nhất dự thảo này vào lúc ${userResponse.timestamp}.`;
            } else {
                userResponseStatus.textContent = `Bạn đã góp ý cho dự thảo này vào lúc ${userResponse.timestamp}.`;
            }
        } else if (isExpired || draft.status === 'approved' || draft.status === 'closed') {
            draftActionSection.style.display = 'none';
            userResponseStatus.style.display = 'block';
            userResponseStatus.className = 'alert alert-warning';
            if (isExpired) {
                userResponseStatus.textContent = 'Đã hết thời hạn góp ý.';
            } else if (draft.status === 'approved') {
                userResponseStatus.textContent = 'Dự thảo đã được thống nhất.';
            } else if (draft.status === 'closed') {
                userResponseStatus.textContent = 'Góp ý dự thảo đã được đóng.';
            }
        } else {
            draftActionSection.style.display = 'block';
            userResponseStatus.style.display = 'none';
            
            // Reset checkboxes
            approveCheckbox.checked = false;
            commentCheckbox.checked = false;
            commentForm.style.display = 'none';
        }
        
        // Populate comments
        populateCommentsList(draft);
        
        // Show detail container
        draftReportListContainer.style.display = 'none';
        draftReportDetailContainer.style.display = 'block';
        createDraftContainer.style.display = 'none';
        
        // Store current draft ID for actions
        window.currentDraftId = draftId;
    }
      function populateCommentsList(draft) {
        const commentsList = document.getElementById('commentsList');
        commentsList.innerHTML = '';
        
        if (draft.comments.length === 0) {
            commentsList.innerHTML = '<p class="text-muted">Chưa có góp ý nào.</p>';
            return;
        }
        
        draft.comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'card mb-2 draft-comment-item';
            commentDiv.innerHTML = `
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <strong class="text-primary">${comment.userId}</strong>
                            <small class="text-muted ms-2">${comment.timestamp}</small>
                        </div>
                        <span class="badge bg-info">Góp ý</span>
                    </div>
                    <p class="mt-2 mb-0 draft-comment-content">"${comment.content}"</p>
                </div>
            `;
            commentsList.appendChild(commentDiv);
        });
        
        // Add summary info
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'alert alert-info mt-3';
        summaryDiv.innerHTML = `
            <i class="fas fa-info-circle"></i> 
            <strong>Tổng cộng:</strong> ${draft.comments.length} góp ý từ các thành viên. 
            Tất cả thành viên đều có thể xem các góp ý này.
        `;
        commentsList.appendChild(summaryDiv);
    }
    
    function calculateWorkingDays(startDate, days) {
        let count = 0;
        let current = new Date(startDate);
        
        while (count < days) {
            current.setDate(current.getDate() + 1);
            // Skip weekends (Saturday = 6, Sunday = 0)
            if (current.getDay() !== 0 && current.getDay() !== 6) {
                count++;
            }
        }
        return current;
    }

    // Event Listeners for Draft Report
    if (createNewDraftButton) {
        createNewDraftButton.addEventListener('click', function() {
            if (appData.currentUser.role !== 'Admin') {
                showCustomAlert("Chỉ có Người Quản trị Công ty mới có thể tạo dự thảo tờ trình.");
                return;
            }
            draftReportListContainer.style.display = 'none';
            draftReportDetailContainer.style.display = 'none';
            createDraftContainer.style.display = 'block';
        });
    }
      if (backToDraftListButton) {
        backToDraftListButton.addEventListener('click', function() {
            showDraftReportList();
        });
    }
    
    if (backToEndVoteListButton) {
        backToEndVoteListButton.addEventListener('click', function() {
            document.getElementById('endVoteListContainer').style.display = 'block';
            document.getElementById('endVoteDetailContainer').style.display = 'none';
        });
    }
    
    if (backFromCreateDraftButton) {
        backFromCreateDraftButton.addEventListener('click', function() {
            showDraftReportList();
        });
    }
    
    if (customPeriodRadio) {
        customPeriodRadio.addEventListener('change', function() {
            customPeriodDaysInput.style.display = this.checked ? 'block' : 'none';
            customPeriodDaysInput.required = this.checked;
        });
    }
    
    if (createDraftForm) {
        createDraftForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const title = document.getElementById('draftTitle').value;
            const content = document.getElementById('draftContentInput').value;
            const attachmentsInput = document.getElementById('draftAttachmentsInput');
            const files = attachmentsInput.files;
            
            let commentPeriodDays = 5; // default
            const selectedPeriod = document.querySelector('input[name="commentPeriod"]:checked').value;
            if (selectedPeriod === 'custom') {
                commentPeriodDays = parseInt(customPeriodDaysInput.value) || 5;
            }
            
            let attachmentData = [];
            for (let i = 0; i < files.length; i++) {
                attachmentData.push({
                    name: files[i].name,
                    type: files[i].type,
                    size: files[i].size
                });
            }
            
            const createdDate = new Date();
            const commentDeadline = calculateWorkingDays(createdDate, commentPeriodDays);
            
            const newDraft = {
                id: appData.draftReports.length > 0 ? Math.max(...appData.draftReports.map(d => d.id)) + 1 : 1,
                title: title,
                content: content,
                attachments: attachmentData,
                creator: appData.currentUser.username,
                createdDate: createdDate.toISOString().split('T')[0],
                commentDeadline: commentDeadline.toISOString().split('T')[0],
                status: 'open',
                comments: [],
                responses: []
            };
            
            appData.draftReports.push(newDraft);
            
            showCustomAlert('Tạo dự thảo tờ trình thành công!');
            createDraftForm.reset();
            customPeriodDaysInput.style.display = 'none';
            populateDraftReportList();
            showDraftReportList();
        });    }
    
    if (approveCheckbox) {
        approveCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Uncheck comment checkbox if approve is checked
                commentCheckbox.checked = false;
                commentForm.style.display = 'none';
                
                // Process approval immediately
                const draft = appData.draftReports.find(d => d.id === window.currentDraftId);
                if (!draft) return;
                
                // Add user response
                draft.responses.push({
                    userId: appData.currentUser.username,
                    type: 'approve',
                    timestamp: new Date().toLocaleString('vi-VN')
                });
                
                showCustomAlert('Đã ghi nhận thống nhất dự thảo của bạn.');
                showDraftDetail(window.currentDraftId); // Refresh view
                populateDraftReportList(); // Update list
            }
        });
    }
    
    if (commentCheckbox) {
        commentCheckbox.addEventListener('change', function() {
            if (this.checked) {
                // Uncheck approve checkbox if comment is checked
                approveCheckbox.checked = false;
                commentForm.style.display = 'block';
                document.getElementById('commentContent').focus();
            } else {
                commentForm.style.display = 'none';
                document.getElementById('commentContent').value = '';
            }
        });
    }
    
    if (cancelCommentButton) {
        cancelCommentButton.addEventListener('click', function() {
            commentCheckbox.checked = false;
            commentForm.style.display = 'none';
            document.getElementById('commentContent').value = '';
        });
    }
    
    if (closeDraftButton) {
        closeDraftButton.addEventListener('click', function() {
            if (confirm('Bạn có chắc chắn muốn đóng góp ý cho dự thảo này? Hành động này không thể hoàn tác.')) {
                const draft = appData.draftReports.find(d => d.id === window.currentDraftId);
                if (!draft) return;
                
                if (draft.creator !== appData.currentUser.username) {
                    showCustomAlert('Chỉ người tạo dự thảo mới có thể đóng góp ý.');
                    return;
                }
                
                draft.status = 'closed';
                showCustomAlert('Đã đóng góp ý cho dự thảo này.');
                showDraftDetail(window.currentDraftId); // Refresh view
                populateDraftReportList(); // Update list
            }        });
    }
    
    if (savePermissionsButton) {
        savePermissionsButton.addEventListener('click', function() {
            savePermissions();
        });
    }
    
    if (submitCommentForm) {
        submitCommentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const commentContent = document.getElementById('commentContent').value;
            const draft = appData.draftReports.find(d => d.id === window.currentDraftId);
            if (!draft) return;
            
            // Add comment
            const newComment = {
                id: draft.comments.length > 0 ? Math.max(...draft.comments.map(c => c.id)) + 1 : 1,
                userId: appData.currentUser.username,
                content: commentContent,
                timestamp: new Date().toLocaleString('vi-VN'),
                type: 'comment'
            };
            
            draft.comments.push(newComment);
            
            // Add user response
            draft.responses.push({
                userId: appData.currentUser.username,
                type: 'comment',
                timestamp: new Date().toLocaleString('vi-VN')
            });
            
            showCustomAlert('Đã gửi góp ý của bạn.');
            document.getElementById('commentContent').value = '';
            showDraftDetail(window.currentDraftId); // Refresh view
            populateDraftReportList(); // Update list
        });
    }

    // Initial setup calls on page load
    populateAllDynamicContent();
    applyPermissionsToUI(); 
    if (!appData.currentUser) { 
        loginPage.style.display = 'flex'; 
        dashboardPage.style.display = 'none';
    } else { 
        loginPage.style.display = 'none';
        dashboardPage.style.display = 'block'; 
        navigateToModule('dashboardHome');
    }
});

// Update module visibility based on user permissions
    function updateModuleVisibility() {
        if (!appData.currentUser || !appData.currentUser.permissions) return;
        
        const permissions = appData.currentUser.permissions;
        const moduleLinks = document.querySelectorAll('.module-navbar-custom .nav-link');
        
        moduleLinks.forEach(link => {
            const moduleType = link.getAttribute('data-module');
            let hasPermission = true;
            
            switch(moduleType) {
                case 'draftReport':
                    hasPermission = permissions.draftReport;
                    break;
                case 'createVote':
                    hasPermission = permissions.createVote;
                    break;
                case 'voteList':
                    hasPermission = permissions.voteList;
                    break;
                case 'endVote':
                    hasPermission = permissions.endVote;
                    break;
                case 'voteHistory':
                    hasPermission = permissions.voteHistory;
                    break;
                case 'documentCabinet':
                    hasPermission = permissions.documentCabinet;
                    break;
                case 'adminManagement':
                    hasPermission = permissions.adminManagement;
                    break;
                case 'dashboardHome':
                    hasPermission = true; // Dashboard always visible
                    break;
                default:
                    hasPermission = true;
            }
            
            if (hasPermission) {
                link.style.display = 'block';
                link.parentElement.style.display = 'block';
            } else {
                link.style.display = 'none';
                link.parentElement.style.display = 'none';
            }
        });
        
        console.log("Module visibility updated for user:", appData.currentUser.username);
    }

// Global functions
window.handleAttachmentClick = function(context, itemId, attachmentDisplayName) {
    console.log("handleAttachmentClick:", context, itemId, attachmentDisplayName);
    // Implementation placeholder
};

window.showEndVoteDetail = function(voteId) {
    const vote = appData.votes.find(v => v.id === voteId);
    if (!vote) {
        showCustomAlert("Không tìm thấy phiếu biểu quyết.");
        return;
    }
    
    // Populate vote detail information
    document.getElementById('endVoteDetailTitle').textContent = vote.title;
    document.getElementById('endVoteDetailRefNum').textContent = vote.refNum;
    
    // Get lists of users who voted and didn't vote
    const allAssignees = vote.assignees.filter(a => a !== 'all');
    const votedUserIds = vote.results ? vote.results.map(r => r.userId) : [];
    const notVotedUsers = allAssignees.filter(userId => !votedUserIds.includes(userId));
    
    // Populate users who voted
    const usersVotedList = document.getElementById('usersVotedList');
    usersVotedList.innerHTML = '';
    if (vote.results && vote.results.length > 0) {
        vote.results.forEach(result => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-start';
            
            let optionClass = 'secondary';
            let optionText = 'Khác';
            let iconClass = 'fas fa-question-circle';
            
            if (result.option === 'agree') {
                optionClass = 'success';
                optionText = 'Đồng ý';
                iconClass = 'fas fa-thumbs-up';
            } else if (result.option === 'disagree') {
                optionClass = 'danger';
                optionText = 'Không đồng ý';
                iconClass = 'fas fa-thumbs-down';
            }
            
            li.innerHTML = `
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${result.userId}</div>
                    <small class="text-muted">${result.timestamp}</small>
                    ${result.reason ? `<br><small><strong>Lý do:</strong> ${result.reason}</small>` : ''}
                </div>
                <span class="badge bg-${optionClass} rounded-pill">${optionText}</span>
            `;
            usersVotedList.appendChild(li);
        });
    } else {
        usersVotedList.innerHTML = '<li class="list-group-item text-muted">Chưa có ai biểu quyết.</li>';
    }
    
    // Populate users who haven't voted
    const usersNotVotedList = document.getElementById('usersNotVotedList');
    usersNotVotedList.innerHTML = '';
    if (notVotedUsers.length > 0) {
        notVotedUsers.forEach(userId => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `
                <div class="fw-bold">${userId}</div>
                <small class="text-muted">Chưa biểu quyết</small>
            `;
            usersNotVotedList.appendChild(li);
        });
    } else {
        usersNotVotedList.innerHTML = '<li class="list-group-item text-success">Tất cả đã biểu quyết.</li>';
    }
    
    // Setup end vote button
    const executeEndVoteButton = document.getElementById('executeEndVoteButton');
    const endVoteStatusMessage = document.getElementById('endVoteStatusMessage');
    
    // Only admin can end votes
    if (appData.currentUser && appData.currentUser.permissions.endVote) {
        executeEndVoteButton.disabled = false;
        executeEndVoteButton.onclick = function() {
            if (confirm(`Bạn có chắc chắn muốn kết thúc phiếu biểu quyết "${vote.title}"?`)) {
                // End the vote
                vote.status = 'closed';
                
                // Generate summary
                const agreeCount = vote.results.filter(r => r.option === 'agree').length;
                const disagreeCount = vote.results.filter(r => r.option === 'disagree').length;
                const otherCount = vote.results.filter(r => r.option === 'other').length;
                const totalVoted = vote.results.length;
                const totalAssignees = allAssignees.length;
                
                vote.summary = `Kết quả biểu quyết: ${agreeCount} đồng ý, ${disagreeCount} không đồng ý, ${otherCount} ý kiến khác. Tổng số: ${totalVoted}/${totalAssignees} người đã biểu quyết.`;
                
                showCustomAlert('Đã kết thúc phiếu biểu quyết thành công!');
                
                // Update dashboard counts
                updateDashboardCounts();
                
                // Go back to list
                document.getElementById('endVoteListContainer').style.display = 'block';
                document.getElementById('endVoteDetailContainer').style.display = 'none';
                populateEndVoteListTable();
            }
        };
        endVoteStatusMessage.textContent = 'Bạn có thể kết thúc phiếu biểu quyết này.';
    } else {
        executeEndVoteButton.disabled = true;
        endVoteStatusMessage.textContent = 'Chỉ Admin mới có thể kết thúc phiếu biểu quyết.';
    }
    
    // Show detail container
    document.getElementById('endVoteListContainer').style.display = 'none';
    document.getElementById('endVoteDetailContainer').style.display = 'block';
};
