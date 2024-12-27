# innerHTML Tutorial

**Think `innerHTML` is harmless? Think again!**  
In this video, we uncover the hidden dangers of using `innerHTML`, from major security vulnerabilities to performance issues that could cripple your website. Watch as we break down real-life examples of the damage it can cause and learn how to protect your website from these threats.

---

### YouTube Video: [innerHTML Tutorial](https://www.youtube.com/watch?v=LA7udFGXZOw){:target="_blank"}

## Testing `innerHTML` Security and Behavior

Follow these steps to experiment with `innerHTML` and observe its impact:

---

### Step 1: Open Developer Tools

1. Open your browser’s Developer Tools (usually accessible via `F12` or `Ctrl+Shift+I` / `Cmd+Opt+I`).
2. Go to the **Console** tab to execute JavaScript commands.

---

### Step 2: Execute the Following Code Examples

#### 1. Get the Current Content of an Element
Use `innerHTML` to retrieve the content of a specific section:
```javascript
document.getElementById('our-services').innerHTML;
```
This will display the HTML content of the element with the ID `our-services`.

---

#### 2. Replace Section Content with New HTML

Modify the section by assigning a new HTML string to innerHTML.

```javascript
document.getElementById('our-services').innerHTML = '<h1>Hello World!</h1>';
```
This replaces the existing content with a heading saying “Hello World!”.

---

### Step 3: Test `innerHTML` Vulnerabilities

#### - Attempt to Inject Malicious Code

Submit a comment in the comments section with the following code:
```javascript
<script>alert('Hacked!')</script>
```
Observe that modern browsers block this, and nothing happens.

---

#### Inject an Image with an Event Handler

Add a comment with a valid image and an onerror event:
```javascript
<img src="https://picsum.photos/200/300" onerror="alert('Hacked!')">
```

Notice that the image is successfully added to the comments, but no alert is triggered because the image loads correctly.

---

#### Inject an Invalid Image to Trigger onerror

Submit a comment with an invalid image URL:
```javascript
<img src="https://nonexisting" onerror="alert('Hacked!')">
```

Observe an alert box with the message “Hacked!”
This demonstrates a successful XSS (Cross-Site Scripting) attack through innerHTML.
