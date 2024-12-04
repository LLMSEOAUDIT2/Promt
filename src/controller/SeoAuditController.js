const SeoAuditModel = require('../models/seoAuditModel');

const SeoAuditController = {
    // Mendapatkan semua data audit
    getAll: (req, res) => {
        const audits = SeoAuditModel.getAll();
        if (audits.length === 0) {
            return res.status(404).json({ message: 'Tidak ada data SEO audit' });
        }
        res.status(200).json(audits);
    },

    // Mendapatkan data audit berdasarkan ID
    getById: (req, res) => {
        const { id } = req.params;
        const audit = SeoAuditModel.getById(id);
        if (audit) {
            res.status(200).json(audit);
        } else {
            res.status(404).json({ message: 'Data SEO audit tidak ditemukan' });
        }
    },

    // Menambahkan data audit baru
    add: (req, res) => {
        const {
            clientName,
            websiteUrl,
            auditDate,
            gtmetrixGrade,
            gtmetrixPerformance,
            gtmetrixStructure,
            pagespeedPerformance,
            pagespeedAccessibility,
            pagespeedbestpractices,
            pageSpeedSEO,
            brokenLinksCount,
            brokenLinkurl,
            duplicateContentPercentage,
            commonContentPercentage,
            uniqueContentPercentage,
            mobileFriendly,
            metaTitle,
            metaTitleCount,
            metaDescription,
            metaDescriptionCount,
            H1Count,
            H2Count,
            H3Count,
            H4Count,
            H5Count,
            H6Count,
            metaKeywords,
            openGraph,
            metaRobots,
            canonicalTag,
            sitemapPresent,
            robotsTxtPresent,
            googleSearchConsole,
            faviconPresent,
            notes,
        } = req.body;

        // Validasi input
        if (!clientName || !websiteUrl || !auditDate || !gtmetrixGrade || !pagespeedPerformance ||
            !metaTitle || !metaDescription) {
            return res.status(400).json({ message: 'Beberapa parameter penting tidak boleh kosong' });
        }

        // Menambahkan data audit ke model
        const newAudit = SeoAuditModel.add({
            clientName,
            websiteUrl,
            auditDate,
            gtmetrixGrade,
            gtmetrixPerformance,
            gtmetrixStructure,
            pagespeedPerformance,
            pagespeedAccessibility,
            pagespeedbestpractices,
            pageSpeedSEO,
            brokenLinksCount,
            brokenLinkurl,
            duplicateContentPercentage,
            commonContentPercentage,
            uniqueContentPercentage,
            mobileFriendly,
            metaTitle,
            metaTitleCount,
            metaDescription,
            metaDescriptionCount,
            H1Count,
            H2Count,
            H3Count,
            H4Count,
            H5Count,
            H6Count,
            metaKeywords,
            openGraph,
            metaRobots,
            canonicalTag,
            sitemapPresent,
            robotsTxtPresent,
            googleSearchConsole,
            faviconPresent,
            notes,
        });

        res.status(201).json({ message: 'Data SEO audit berhasil disimpan', data: newAudit });
    },

    // Menghapus data audit berdasarkan ID
    deleteById: (req, res) => {
        const { id } = req.params;
        const success = SeoAuditModel.deleteById(id);
        if (success) {
            res.status(200).json({ message: 'Data SEO audit berhasil dihapus' });
        } else {
            res.status(404).json({ message: 'Data SEO audit tidak ditemukan' });
        }
    },

    // Menghapus semua data audit
    clear: (req, res) => {
        SeoAuditModel.clear();
        res.status(200).json({ message: 'Semua data SEO audit berhasil dihapus' });
    },

    // Mengedit data audit berdasarkan ID
    editById: (req, res) => {
        const { id } = req.params;
        const {
            clientName,
            websiteUrl,
            auditDate,
            gtmetrixGrade,
            gtmetrixPerformance,
            gtmetrixStructure,
            pagespeedPerformance,
            pagespeedAccessibility,
            pagespeedbestpractices,
            pageSpeedSEO,
            brokenLinksCount,
            brokenLinkurl,
            duplicateContentPercentage,
            commonContentPercentage,
            uniqueContentPercentage,
            mobileFriendly,
            metaTitle,
            metaTitleCount,
            metaDescription,
            metaDescriptionCount,
            H1Count,
            H2Count,
            H3Count,
            H4Count,
            H5Count,
            H6Count,
            metaKeywords,
            openGraph,
            metaRobots,
            canonicalTag,
            sitemapPresent,
            robotsTxtPresent,
            googleSearchConsole,
            faviconPresent,
            notes,
        } = req.body;

        // Validasi input
        if (!clientName || !websiteUrl || !auditDate || !gtmetrixGrade || !pagespeedPerformance ||
            !metaTitle || !metaDescription) {
            return res.status(400).json({ message: 'Beberapa parameter penting tidak boleh kosong' });
        }

        // Memperbarui data audit
        const updatedAudit = SeoAuditModel.updateById(id, {
            clientName,
            websiteUrl,
            auditDate,
            gtmetrixGrade,
            gtmetrixPerformance,
            gtmetrixStructure,
            pagespeedPerformance,
            pagespeedAccessibility,
            pagespeedbestpractices,
            pageSpeedSEO,
            brokenLinksCount,
            brokenLinkurl,
            duplicateContentPercentage,
            commonContentPercentage,
            uniqueContentPercentage,
            mobileFriendly,
            metaTitle,
            metaTitleCount,
            metaDescription,
            metaDescriptionCount,
            H1Count,
            H2Count,
            H3Count,
            H4Count,
            H5Count,
            H6Count,
            metaKeywords,
            openGraph,
            metaRobots,
            canonicalTag,
            sitemapPresent,
            robotsTxtPresent,
            googleSearchConsole,
            faviconPresent,
            notes,
        });

        if (updatedAudit) {
            res.status(200).json({ message: 'Data SEO audit berhasil diperbarui', data: updatedAudit });
        } else {
            res.status(404).json({ message: 'Data SEO audit tidak ditemukan' });
        }
    },
};

module.exports = SeoAuditController;
