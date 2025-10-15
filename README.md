# 🛍️ STECH (Frontend Demo)

[![Triển khai với Vercel](https://vercel.com/button)]([Link đến Repository của bạn])

Đây là bản **Demo Giao Diện Người Dùng (Frontend Only)** của một ứng dụng thương mại điện tử/mua sắm. Dự án được tạo ra để trưng bày kiến thức về cấu trúc dự án **Next.js App Router** và kỹ năng thiết kế giao diện, đặc biệt là cách quản lý trạng thái phía Client.

## 🚀 Trải Nghiệm Demo Trực Tuyến

Dự án này đã được triển khai (deploy) dưới dạng một ứng dụng tĩnh (Static Application) trên **Vercel**.

**🔗 Liên kết Demo Trực Tuyến:**
*Thay thế liên kết này bằng URL Vercel của bạn*
`[DEMO TRỰC TUYẾN TẠI ĐÂY](https://your-vercel-deployment-url.vercel.app)`

---

## ✨ Tính Năng Frontend Nổi Bật

Dự án tập trung vào việc mô phỏng trải nghiệm người dùng cuối với các tính năng:

* **🛒 Quản lý Giỏ hàng (Cart Logic):** Chức năng **thêm/xóa/cập nhật số lượng sản phẩm** trong giỏ hàng hoạt động hoàn toàn bằng **logic phía Client (Client-Side Logic)**, sử dụng trạng thái cục bộ (ví dụ: Context API hoặc LocalStorage).
* **📂 Cấu trúc Next.js App Router:** Trưng bày cách tổ chức file và định tuyến theo cấu trúc hiện đại của Next.js, bao gồm **Group Routing** (`(account)`, `(pages)`) và **Dynamic Routing** (`products/[id]`).
* **📂 Tìm kiếm và lọc sản phẩm:** tìm sản phẩm trên thanh tìm kiếm và lọc theo thương hiệu.
   
[//]: # (* **📱 Thiết kế Đáp ứng &#40;Responsive Design&#41;:** Giao diện được tối ưu hóa cho Mobile, Tablet và Desktop.)

---

## 🛑 Lưu Ý Quan Trọng (Hạn Chế Của Bản Demo)

Vì đây là bản **Demo Tĩnh** (Static Demo) được xây dựng chỉ để trình bày giao diện (Frontend), các tính năng liên quan đến Backend và Database **không hoạt động**:

1.  **❌ Không có Backend/Database:** Dữ liệu sản phẩm và thông tin người dùng được **mã hóa cứng (hardcode)**.
2.  **❌ Không có Xác thực:** Các trang `/sign-in`, `/sign-up` **chỉ là giao diện**. Việc gửi form xác thực sẽ không hoạt động.
3.  **❌ Chức năng Thanh toán:** Trang `/checkout` là giao diện và **không xử lý thanh toán** thực tế.

---

## 📁 Cấu trúc Thư mục và Đường dẫn

Dự án sử dụng **Next.js App Router**, tổ chức các trang và đường dẫn dựa trên cấu trúc thư mục như sau:

| Cấu trúc Folder (trong `app/`)   | Đường dẫn (URL Path) | Tên trang / Mô tả               | Nhóm (Group) |
|:---------------------------------|:---------------------|:--------------------------------|:-------------|
| `page.tsx`                       | `/`                  | **Trang Chủ**                   | -            |
| `(pages)/about/page.tsx`         | `/about`             | Trang Giới Thiệu                | (pages)      |
| `(pages)/contact/page.tsx`       | `/contact`           | Trang Liên Hệ                   | (pages)      |
| `(pages)/cart/page.tsx`          | `/cart`              | **Giỏ Hàng** (Logic hoạt động)  | (pages)      |
| `(pages)/checkout/page.tsx`      | `/checkout`          | Trang Thanh Toán (Giao diện)    | (pages)      |
| `(pages)/products/page.tsx`      | `/products`          | **Trang Sản Phẩm** (giao diện)  | (pages)      |
| `(pages)/products/[id]/page.tsx` | `/products/:id`      | **Chi Tiết Sản Phẩm** (Dynamic) | (pages)      |
| `(account)/sign-in/page.tsx`     | `/sign-in`           | Đăng Nhập (Giao diện)           | (account)    |
| `(account)/sign-up/page.tsx`     | `/sign-up`           | Đăng Ký (Giao diện)             | (account)    |

---

## 🛠️ Công Nghệ Sử dụng

* **Next.js 14+** (Sử dụng App Router)
* **TypeScript (TSX)**
* **Tailwind CSS (Shadcn ui)**
* **Redux toolkit - Context**

---

## ⚙️ Hướng dẫn Chạy Cục bộ (Local Development)

Nếu bạn muốn xem mã nguồn và chạy bản Frontend này trên máy tính của mình:

```bash
# Clone repository
git clone [Link đến Repository của bạn]
cd ten-du-an-cua-ban

# Cài đặt dependencies
npm install  # hoặc yarn install

# Chạy server development
npm run dev  # hoặc yarn dev