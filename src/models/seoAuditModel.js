const { v4: uuidv4 } = require('uuid');

const seoAuditData = [];

const SeoAuditModel = {
    // Mendapatkan semua data audit
    getAll: () => seoAuditData,

    // Mendapatkan data audit berdasarkan ID
    getById: (id) => seoAuditData.find((audit) => audit.id === id),

    // Menambahkan data audit baru
    add: (data) => {
        const newAudit = { id: uuidv4(), ...data };
        seoAuditData.push(newAudit);
        return newAudit;
    },

    // Menghapus data audit berdasarkan ID
    deleteById: (id) => {
        const index = seoAuditData.findIndex((audit) => audit.id === id);
        if (index !== -1) {
            seoAuditData.splice(index, 1);
            return true;
        }
        return false;
    },

    // Menghapus semua data audit
    clear: () => seoAuditData.splice(0, seoAuditData.length),

    // Mengupdate data audit berdasarkan ID
    updateById: (id, updatedData) => {
        const auditIndex = seoAuditData.findIndex((audit) => audit.id === id);
        if (auditIndex !== -1) {
            // Menggabungkan data lama dengan data baru
            const updatedAudit = { ...seoAuditData[auditIndex], ...updatedData };
            seoAuditData[auditIndex] = updatedAudit;  // Memperbarui data
            return updatedAudit;
        }
        return null; // Jika ID tidak ditemukan
    }
};

module.exports = SeoAuditModel;
