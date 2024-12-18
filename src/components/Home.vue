<script setup></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-customWhite">
    <!-- MAIN Col 1 -->
    <div class="col-span-1">
      <!-- row A -->
      <div class="grid grid-rows-2 gap-4">
        <div class="bg-lightYellow p-6 h-fit rounded-xl shadow-md">
          <p class="text-xl md:text-2xl lg:text-3xl font-bold">
            <span class="text-customBlack"
              >Create and<br />schedule<br />
              content </span
            ><br />
            <span class="text-darkPurple">quicker.</span>
          </p>
          <div class="mt-4">
            <!-- <button
              class="capitalize text-xl bg-darkYellow text-darkPurple font-bold py-4 w-48 rounded-full"
            >
              Create post
            </button> -->
            <img
              class="img-fluid w-48"
              alt="create post"
              src="../assets/images/illustration-create-post.webp"
            />
          </div>
        </div>
        <!-- row B -->
        <div class="text-4xl bg-darkYellow p-6 h-fit rounded-xl shadow-md">
          <p class="text-xl md:text-2xl lg:text-3xl font-bold">
            Write your<br />content<br />using AI.
          </p>
          <div class="mt-2">
            <img
              class="img-fluid h-64"
              alt="ai-content"
              src="../assets/images/illustration-ai-content.webp"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- MAIN Col 2 -->
    <!-- ........................................Sub col 1........................................ -->
    <div class="md:col-span-2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Col A -->
        <div class="md:row-span-2">
          <!-- first row -->
          <div class="bg-darkPurple h-48 p-4 rounded-xl text-center shadow-md">
            <p class="text-xl md:text-2xl lg:text-3xl font-bold">
              <span class="text-customWhite">Social Media</span>
              <span class="text-darkYellow">10x</span>
              <br />
              <span class="text-customWhite">Faster with AI</span>
            </p>
            <div class="flex justify-center py-4">
              <img
                class="img-fluid w-24"
                alt="five-stars"
                src="../assets/images/illustration-five-stars.webp"
              />
            </div>
            <p class="text-sm text-customWhite">Over 4,000 5-star reviews</p>
          </div>
          <!-- second row -->
          <div class="grid grid-cols-2 gap-4 mt-4">
            <!-- first col -->
            <div class="p-6 shadow-md rounded-md">
              <div class="overflow-hidden w-full aspect-[4/3] relative">
                <img
                  class="object-contain w-full h-full max-w-full absolute right-[-25%]"
                  alt="platforms"
                  src="../assets/images/illustration-multiple-platforms.webp"
                />
              </div>

              <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-customBlack">
                Manage<br />multiple<br />accounts and<br />platforms.
              </p>
            </div>
            <!-- second col -->
            <div class="p-6 shadow-md bg-darkYellow rounded-xl overflow-hidden">
              <p class="text-xl md:text-2xl lg:text-3xl font-bold text-customBlack">
                Maintain a<br />consistent<br />posting<br />schedule.
              </p>
              <img
                class="img-fluid relative bottom-[-30%]"
                alt="schedule"
                src="../assets/images/illustration-consistent-schedule.webp"
              />
            </div>
          </div>
        </div>
        <!-- Col B -->
        <div class="bg-lightPurple h-96 p-4 rounded-md shadow-md overflow-hidden">
          <p class="text-xl md:text-2xl lg:text-3xl font-bold text-customBlack">
            Schedule to<br />social media.
          </p>
          <img
            class="img-fluid relative right-[-30%]"
            alt="schedule"
            src="../assets/images/illustration-schedule-posts.webp"
          />
        </div>
        <!-- ........................................Sub col 2........................................ -->
        <div class="grid grid-cols-3 gap-4 md:col-span-2 mt-4">
          <!-- First column -->
          <div class="col-span-1 bg-customWhite p-6 rounded-md shadow-md">Column 1</div>
          <!-- Second column -->
          <div class="col-span-2 bg-darkPurple p-6 rounded-md shadow-md text-customWhite">
            Column 2
          </div>
        </div>
      </div>
    </div>
    <!-- fin -->
  </div>
</template>

<style scoped></style>
