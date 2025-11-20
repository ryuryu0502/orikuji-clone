# GitHubへのPush手順

## 方法1: バッチファイルを使用する（推奨）

1. `git_push.bat` ファイルをダブルクリックして実行してください
2. GitHubの認証情報を求められた場合は入力してください
   - ユーザー名: ryuryu0502
   - パスワード: Personal Access Token（パスワードではなくトークンが必要です）

## 方法2: コマンドプロンプトで手動実行

以下のコマンドを**コマンドプロンプト**で順番に実行してください:

```cmd
chcp 65001
cd c:\Users\ryu\Downloads\work\orikuji-clone
git init
git add .
git commit -m "Initial commit: Orikuji clone project"
git branch -M main
git remote add origin https://github.com/ryuryu0502/orikuji-clone.git
git push -u origin main
```

## 方法3: Git Bashを使用する

**Git Bash**を開いて以下のコマンドを実行してください:

```bash
cd /c/Users/ryu/Downloads/work/orikuji-clone
git init
git add .
git commit -m "Initial commit: Orikuji clone project"
git branch -M main
git remote add origin https://github.com/ryuryu0502/orikuji-clone.git
git push -u origin main
```

## トラブルシューティング

### エラー: "remote origin already exists"
既にリモートが設定されている場合は、以下のコマンドを実行してください:
```cmd
git remote remove origin
git remote add origin https://github.com/ryuryu0502/orikuji-clone.git
git push -u origin main
```

### エラー: "failed to push some refs"
リモートリポジトリに既にコミットがある場合は、以下のコマンドを実行してください:
```cmd
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 認証エラー
GitHubでは、パスワード認証が廃止されています。Personal Access Tokenを使用してください:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" をクリック
3. `repo` スコープを選択
4. トークンを生成してコピー
5. パスワードの代わりにこのトークンを使用

## 作成されたファイル

- `.gitignore`: Node.jsとNext.jsプロジェクト用の標準的な除外設定
- `git_push.bat`: GitHubへのpushを自動化するバッチファイル
