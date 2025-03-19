# 第一阶段：构建阶段
FROM --platform=${BUILDPLATFORM:-linux/amd64,linux/arm64} node:20-buster AS builder

# 设置环境变量
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# 安装 pnpm
RUN corepack enable

# 设置工作目录
WORKDIR /src

# 复制项目文件
COPY ./ ./

# 安装依赖
RUN pnpm install --verbose || { cat /src/pnpm-debug.log; exit 1; }

# 构建项目
RUN pnpm run build

# 第二阶段：运行阶段
FROM --platform=${BUILDPLATFORM:-linux/amd64,linux/arm64} ghcr.io/rookie-luochao/nginx-runner:latest

# 复制构建后的文件到运行环境
COPY --from=builder /src/dist /app
